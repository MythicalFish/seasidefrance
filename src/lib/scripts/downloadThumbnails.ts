import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import sharp from 'sharp';

// Import properties data
const properties = JSON.parse(
  fs.readFileSync(path.join('src', 'data', '_fixtures', 'properties.json'), 'utf8')
);

const THUMBNAILS_DIR = path.join('public', 'thumbnails');
const THUMBNAIL_WIDTH = 600; // Standard width for thumbnails
const THUMBNAIL_HEIGHT = 400; // Standard height for thumbnails (3:2 aspect ratio)

/**
 * Download an image from a URL and save it to a temporary location
 */
async function downloadImageToTemp(url: string, tempPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // Handle protocol-relative URLs
    const fullUrl = url.startsWith('//') ? `https:${url}` : url;

    // Remove query parameters for cleaner image download
    const cleanUrl = fullUrl.split('?')[0];

    const protocol = cleanUrl.startsWith('https') ? https : http;

    const request = protocol.get(cleanUrl, (response) => {
      if (response.statusCode === 200) {
        const writeStream = fs.createWriteStream(tempPath);
        response.pipe(writeStream);

        writeStream.on('finish', () => {
          writeStream.close();
          resolve();
        });

        writeStream.on('error', reject);
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        const redirectUrl = response.headers.location;
        if (redirectUrl) {
          downloadImageToTemp(redirectUrl, tempPath).then(resolve).catch(reject);
        } else {
          reject(new Error(`Redirect without location header for ${url}`));
        }
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    });

    request.on('error', reject);
    request.setTimeout(30000, () => {
      request.destroy();
      reject(new Error(`Timeout downloading ${url}`));
    });
  });
}

/**
 * Process and resize an image to thumbnail specifications
 */
async function processImageToThumbnail(inputPath: string, outputPath: string): Promise<void> {
  try {
    await sharp(inputPath)
      .resize(THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT, {
        fit: 'cover', // Crop to fill the exact dimensions
        position: 'center', // Center the crop
      })
      .jpeg({
        quality: 85,
        progressive: true,
      })
      .toFile(outputPath);
  } catch (error) {
    throw new Error(`Failed to process image: ${error}`);
  }
}

/**
 * Process a single property to download and resize its thumbnail
 */
async function processProperty(property: any): Promise<void> {
  if (!property.imageUrl) {
    console.log(`⏭️ Skipping property ${property.id} - no image URL`);
    return;
  }

  // Always save as .jpg for consistency
  const thumbnailPath = path.join(THUMBNAILS_DIR, `${property.id}.jpg`);

  // Skip if thumbnail already exists
  // if (fs.existsSync(thumbnailPath)) {
  //   console.log(`⏭️ Thumbnail already exists for property ${property.id}`);
  //   return;
  // }

  // Create temporary file path
  const tempPath = path.join(THUMBNAILS_DIR, `temp_${property.id}_${Date.now()}`);

  try {
    console.log(`⬇️ Downloading image for property ${property.id}: ${property.name}`);

    // Download to temporary location
    await downloadImageToTemp(property.imageUrl, tempPath);

    console.log(`🔄 Processing thumbnail for property ${property.id}...`);

    // Process and resize to thumbnail
    await processImageToThumbnail(tempPath, thumbnailPath);

    // Clean up temporary file
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }

    // Get file size for feedback
    const stats = fs.statSync(thumbnailPath);
    const fileSizeInKB = Math.round(stats.size / 1024);

    console.log(
      `✅ Created thumbnail for property ${property.id} (${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}px, ${fileSizeInKB}KB)`
    );
  } catch (error) {
    console.error(`❌ Failed to process thumbnail for property ${property.id}:`, error);

    // Clean up temporary file if it exists
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

/**
 * Main function to process all properties
 */
async function main() {
  console.log('🚀 Starting thumbnail download and processing...');

  // Create thumbnails directory if it doesn't exist
  if (!fs.existsSync(THUMBNAILS_DIR)) {
    fs.mkdirSync(THUMBNAILS_DIR, { recursive: true });
    console.log(`📁 Created thumbnails directory: ${THUMBNAILS_DIR}`);
  }

  console.log(`🔍 Found ${properties.length} properties to process`);
  console.log(`📐 Thumbnail size: ${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}px`);

  // Process each property sequentially to avoid overwhelming the server
  for (const property of properties) {
    await processProperty(property);
    // Small delay between downloads to be respectful
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  console.log('✨ Thumbnail processing complete!');
}

// Run the script
main().catch((error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});
