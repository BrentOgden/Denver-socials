// src/components/ImageGrid.jsx
import React, { useState, useEffect } from 'react'
import Divider from './Divider'

export default function ImageGrid({
  images: imagesPool = [],     // full set of assets
  id = 'image-grid',
  initialCount = 12,           // how many to show
  crossfadeCount = 6,          // how many swap at once
}) {
  // 1) pick 12 unique starters
  const [gridImages, setGridImages] = useState(() => {
    const arr = [...imagesPool]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr.slice(0, initialCount)
  })

  // map of idx → newImg while swapping
  const [crossfadeMap, setCrossfadeMap] = useState({})

  const FADE_DURATION = 1000 // ms
  const INTERVAL      = 5000 // ms

  useEffect(() => {
    // nothing to do if pool ≤ grid
    if (imagesPool.length <= gridImages.length) return

    const tick = () => {
      const len   = gridImages.length
      // how many we can actually swap this tick
      const count = Math.min(crossfadeCount, len, imagesPool.length - len)
      if (count <= 0) return

      // pick `count` distinct random indices 0..len-1
      const indices = Array.from({ length: len }, (_, i) => i)
      for (let i = len - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[indices[i], indices[j]] = [indices[j], indices[i]]
      }
      const slotsToSwap = indices.slice(0, count)

      // build set of all currently shown srcs
      const shown = new Set(gridImages.map((img) => img.src))

      // filter pool down to candidates not already shown
      let candidates = imagesPool.filter((img) => !shown.has(img.src))
      // shuffle candidates
      for (let i = candidates.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[candidates[i], candidates[j]] = [candidates[j], candidates[i]]
      }

      // take the first `count` candidates
      const replacements = candidates.slice(0, count)

      // build a map idx→newImg
      const newMap = {}
      slotsToSwap.forEach((slotIdx, i) => {
        newMap[slotIdx] = replacements[i]
      })

      // trigger all fades
      setCrossfadeMap(newMap)

      // after fade duration: swap them all in, then clear the map
      setTimeout(() => {
        setGridImages((prev) => {
          const copy = [...prev]
          for (let slotIdx of slotsToSwap) {
            copy[slotIdx] = newMap[slotIdx]
          }
          return copy
        })
        setTimeout(() => setCrossfadeMap({}), 50)
      }, FADE_DURATION)
    }

    const handle = setInterval(tick, INTERVAL)
    return () => clearInterval(handle)
  }, [imagesPool, gridImages, crossfadeCount])

  return (
    <>
      <section id={id} className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {gridImages.map(({ src, alt, caption }, idx) => {
              const isFading = idx in crossfadeMap

              // fade out only when isFading
              const baseClasses = isFading
                ? 'absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0'
                : 'absolute inset-0 w-full h-full object-cover transition-none opacity-100'

              return (
                <div key={idx} className="group overflow-hidden rounded-lg shadow-lg">
                  <div className="relative w-full h-48">
                    {/* base */}
                    <img src={src} alt={alt} className={baseClasses} />

                    {/* overlay if swapping */}
                    {isFading && (
                      <img
                        src={crossfadeMap[idx].src}
                        alt={crossfadeMap[idx].alt}
                        className="absolute inset-0 w-full h-full object-cover animate-fadeIn"
                        style={{ animationDuration: `${FADE_DURATION}ms` }}
                      />
                    )}
                  </div>
                  {caption && (
                    <div className="mt-2 text-center text-gray-700 transition-colors duration-200 group-hover:text-burnt-brown">
                      {caption}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Divider />
    </>
  )
}
