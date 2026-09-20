/** Derived image variant paths. Sources are named `<slug>.webp` in /public/cars. */

export function cardVariant(src: string): string {
  return src.replace(/\.webp$/i, '-card.webp');
}

export function avifVariant(src: string): string {
  return src.replace(/\.webp$/i, '.avif');
}

export function cardAvifVariant(src: string): string {
  return src.replace(/\.webp$/i, '-card.avif');
}
