import * as lodgify from '../../lib/lodgify-sdk';
import { config } from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import type { V2PropertiesIdRoomsGet200ResponseInner as RoomInfo } from '../../lib/lodgify-sdk';

export type { RoomInfo };

config();
const apiKey = process.env.LODGIFY_PUBLIC_KEY;
if (!apiKey) throw new Error('LODGIFY_PUBLIC_KEY is not set');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, '../../data/_fixtures/roomInfo.json');
const propertiesPath = path.join(__dirname, '../../data/_fixtures/properties.json');
const properties = JSON.parse(fs.readFileSync(propertiesPath, 'utf8'));
const lodgifyConfig = new lodgify.Configuration({ apiKey });
const lodgifyAPI = new lodgify.PropertiesApi(lodgifyConfig);

const fetchRoomInfo = async (propertyId: number): Promise<Array<RoomInfo>> => {
  const rooms = await lodgifyAPI.v2PropertiesIdRoomsGet({
    id: propertyId,
  });

  if (!Array.isArray(rooms) || rooms.length === 0) {
    throw new Error(`No rooms found for property ${propertyId}`);
  }

  return rooms;
};

type RoomInfos = {
  [id: string]: RoomInfo[];
};

async function main(): Promise<void> {
  try {
    const roomInfos: RoomInfos = {};
    for (const property of properties) {
      if (!property.id) continue;
      console.log('ℹ️ Fetching room info for "' + property.name + '"');
      const roomInfo = await fetchRoomInfo(property.id);
      console.log(`ℹ️ Fetched ${roomInfo.length} objects`);
      console.log('');
      roomInfos[property.id] = roomInfo;
    }
    fs.writeFileSync(outputPath, JSON.stringify(roomInfos, null, 2));
    console.log('✅ Room infos updated');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
