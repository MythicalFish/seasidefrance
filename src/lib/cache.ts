import fs from 'fs/promises';
import path from 'path';

const CACHE_DIR = '.cache';

interface CacheOptions {
  type: 'rates' | 'availability' | 'properties';
  propertyId?: number;
  roomTypeId?: number;
  startDate?: string;
  endDate?: string;
}

const getCacheFilePath = (options: CacheOptions): string => {
  const { type, propertyId, roomTypeId, startDate, endDate } = options;

  let filename = type;
  if (propertyId) filename += `-${propertyId}`;
  if (roomTypeId) filename += `-${roomTypeId}`;
  if (startDate) filename += `-${startDate}`;
  if (endDate) filename += `-${endDate}`;

  return path.join(CACHE_DIR, `${filename}.json`);
};

export const getCachedData = async <T>(options: CacheOptions): Promise<T | null> => {
  try {
    const cachePath = getCacheFilePath(options);
    const data = await fs.readFile(cachePath, 'utf-8');
    return JSON.parse(data) as T;
  } catch (error) {
    return null;
  }
};

export const setCachedData = async <T>(options: CacheOptions, data: T): Promise<void> => {
  try {
    await fs.mkdir(CACHE_DIR, { recursive: true });
    const cachePath = getCacheFilePath(options);
    await fs.writeFile(cachePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing to cache:', error);
  }
};

export const clearCache = async (): Promise<void> => {
  try {
    await fs.rm(CACHE_DIR, { recursive: true, force: true });
  } catch (error) {
    console.error('Error clearing cache:', error);
  }
};
