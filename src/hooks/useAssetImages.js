// src/hooks/useAssetImages.js
export function useAssetImages() {
  const modules = import.meta.glob(
    '/src/assets/gallery/*.{png,jpg,jpeg}',
    { eager: true }
  )

  const all = Object.entries(modules).map(([path, mod]) => ({
    src: mod.default,
    alt: path.split('/').pop().replace(/\.(png|jpe?g)$/, '')
  }))

  // *** NO SLICE HERE ***
  return all
}
