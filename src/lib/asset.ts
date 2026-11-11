/**
 * Prefix a /public path with the deployment base path.
 * GitHub Pages serves the site from /<repo>/, and neither <img> nor
 * unoptimized next/image add the base path to string src values.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
