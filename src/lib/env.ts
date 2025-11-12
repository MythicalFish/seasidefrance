type LodgifyEnv = {
  LODGIFY_PUBLIC_KEY?: string;
  PUBLIC_LODGIFY_PUBLIC_KEY?: string;
  VITE_LODGIFY_PUBLIC_KEY?: string;
};

const ORDERED_KEYS: Array<keyof LodgifyEnv> = [
  'LODGIFY_PUBLIC_KEY',
  'PUBLIC_LODGIFY_PUBLIC_KEY',
  'VITE_LODGIFY_PUBLIC_KEY',
];

const getValueFromEnv = (env?: LodgifyEnv): string | undefined => {
  if (!env) return undefined;
  for (const key of ORDERED_KEYS) {
    const value = env[key];
    if (value) {
      return value;
    }
  }
  return undefined;
};

export const getLodgifyApiKey = (): string | undefined => {
  const importMetaEnv = (import.meta as ImportMeta & { env?: LodgifyEnv }).env;
  const metaValue = getValueFromEnv(importMetaEnv);
  if (metaValue) {
    return metaValue;
  }

  if (typeof process !== 'undefined') {
    const processEnv = process.env as LodgifyEnv;
    const processValue = getValueFromEnv(processEnv);
    if (processValue) {
      return processValue;
    }
  }

  return undefined;
};
