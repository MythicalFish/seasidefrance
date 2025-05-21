import propertyPages from '../data/_fixtures/property-pages.json';
import roomInfos from '../data/_fixtures/roomInfo.json';
import type { RoomInfo } from './fetchRoomInfo';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

const fetchImages = async () => {
  for (const { id } of propertyPages) {
    const roomInfo: RoomInfo[] = roomInfos[String(id) as keyof typeof roomInfos];
    const room = roomInfo[0] as RoomInfo;

    // Create directory for property if it doesn't exist
    const photosDir = path.join('src', 'photos', String(id));
    if (!fs.existsSync(photosDir)) {
      fs.mkdirSync(photosDir, { recursive: true });
    }

    // Download each image
    if (room.images && room.images.length) {
      for (let i = 0; i < room.images.length; i++) {
        const image = room.images[i];
        let imageUrl = typeof image === 'string' ? image : image.url;

        if (!imageUrl) {
          console.error('❌ No URL found for image:', image);
          continue;
        }

        // Fix URLs that start with // by adding https:
        if (imageUrl.startsWith('//')) {
          imageUrl = `https:${imageUrl}`;
        }

        try {
          // Extract filename from URL
          const urlPath = new URL(imageUrl).pathname;
          const filename = path.basename(urlPath).split('?')[0]; // Remove query params
          const imagePath = path.join(photosDir, filename);

          // Check if the image already exists
          if (fs.existsSync(imagePath)) {
            console.log(`⏭️ Skipping ${filename} (already exists in ${photosDir})`);
            continue;
          }

          // Download image
          console.log(`⬇️ Downloading ${imageUrl}`);
          const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
          fs.writeFileSync(imagePath, Buffer.from(response.data));
          console.log(`✅ Downloaded ${filename} to ${photosDir}`);
        } catch (error) {
          console.error(`❌ Failed to download image ${imageUrl}:`, error);
        }
      }
    }
  }
};

fetchImages();
