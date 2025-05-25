import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const MAX_SIZE_IN_BYTES = 2 * 1024 * 1024; // 2MB in bytes
const PHOTOS_DIR = path.join('src', 'images', 'photos');
const QUALITY_DECREMENT = 5; // How much to reduce quality each step

/**
 * Optimizes a single image to be under the max size
 */
async function compressImage(imagePath: string): Promise<void> {
  const stats = fs.statSync(imagePath);
  const fileSizeInBytes = stats.size;

  // Skip if already under max size
  if (fileSizeInBytes <= MAX_SIZE_IN_BYTES) {
    console.log(
      `⏭️ Skipping ${path.basename(imagePath)} (already under ${MAX_SIZE_IN_BYTES / 1024 / 1024}MB)`
    );
    return;
  }

  console.log(
    `🔄 Optimizing ${path.basename(imagePath)} (${(fileSizeInBytes / 1024 / 1024).toFixed(2)}MB)`
  );

  try {
    const image = sharp(imagePath);
    const metadata = await image.metadata();

    // Start with reasonable quality
    let quality = 85;
    let optimized = false;
    let buffer: Buffer;

    // Try progressively lower quality until file size is under the limit
    while (!optimized && quality > 10) {
      // Use progressive JPEG for better compression
      buffer = await image.jpeg({ quality, progressive: true }).toBuffer();

      if (buffer.length <= MAX_SIZE_IN_BYTES) {
        optimized = true;
      } else {
        quality -= QUALITY_DECREMENT;
      }
    }

    // If we couldn't get it small enough with just quality reduction,
    // try resizing to 80% of original size
    if (!optimized && metadata.width && metadata.height) {
      const newWidth = Math.floor(metadata.width * 0.8);

      buffer = await image.resize(newWidth).jpeg({ quality: 80, progressive: true }).toBuffer();

      if (buffer.length <= MAX_SIZE_IN_BYTES) {
        optimized = true;
      }
    }

    // If we still couldn't optimize enough, make one final attempt
    // with more aggressive resize and quality reduction
    if (!optimized && metadata.width && metadata.height) {
      const newWidth = Math.floor(metadata.width * 0.6);

      buffer = await image.resize(newWidth).jpeg({ quality: 60, progressive: true }).toBuffer();

      optimized = true;
    }

    // Write the optimized image back to disk
    if (optimized) {
      fs.writeFileSync(imagePath, buffer!);
      const newSize = buffer!.length;
      console.log(
        `✅ Optimized ${path.basename(imagePath)} from ${(fileSizeInBytes / 1024 / 1024).toFixed(2)}MB to ${(newSize / 1024 / 1024).toFixed(2)}MB (${quality}% quality)`
      );
    } else {
      console.error(
        `❌ Failed to optimize ${path.basename(imagePath)} below ${MAX_SIZE_IN_BYTES / 1024 / 1024}MB`
      );
    }
  } catch (error) {
    console.error(`❌ Error optimizing ${path.basename(imagePath)}:`, error);
  }
}

/**
 * Recursively processes all images in a directory
 */
async function processDirectory(directory: string): Promise<void> {
  const items = fs.readdirSync(directory);

  for (const item of items) {
    const itemPath = path.join(directory, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      // Recursively process subdirectories
      await processDirectory(itemPath);
    } else if (stats.isFile() && /\.(jpg|jpeg|png)$/i.test(item)) {
      // Process image files
      await compressImage(itemPath);
    }
  }
}

async function main() {
  // Check if photos directory exists
  if (!fs.existsSync(PHOTOS_DIR)) {
    console.error(`❌ Photos directory not found: ${PHOTOS_DIR}`);
    return;
  }

  console.log(`🔍 Scanning for images to optimize in ${PHOTOS_DIR}...`);
  await processDirectory(PHOTOS_DIR);
  console.log('✨ Image optimization complete!');
}

main().catch((error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});
