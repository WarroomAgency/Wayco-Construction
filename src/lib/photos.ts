import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>('/src/assets/photos/*.webp', { eager: true });
export const photos: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(modules).map(([p, m]) => [p.split('/').pop()!.replace('.webp', ''), m.default]),
);

/** Resolve a photo key (filename without .webp). Throws at build time on a bad key so broken images can never ship. */
export function photo(key: string): ImageMetadata {
  const p = photos[key];
  if (!p) throw new Error(`Unknown photo key "${key}" — check src/assets/photos`);
  return p;
}

const partnerModules = import.meta.glob<{ default: ImageMetadata }>('/src/assets/partners/*.{jpg,png}', { eager: true });
export const partnerLogos: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(partnerModules).map(([p, m]) => [p.split('/').pop()!.replace(/\.(jpg|png)$/, ''), m.default]),
);
