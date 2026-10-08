import { getRequestContext } from '@cloudflare/next-on-pages';

export function getDb(): D1Database {
  const { env } = getRequestContext();
  return env.DB;
}

export function getKv(): KVNamespace {
  const { env } = getRequestContext();
  return env.KV;
}

export function getAssetsBucket(): R2Bucket {
  const { env } = getRequestContext();
  return env.ASSETS_BUCKET;
}
