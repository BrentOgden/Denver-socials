// src/components/ImageGrid.jsx

import React, { useState, useEffect } from 'react'
import Divider from './Divider'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export default function ImageGrid({
  images: imagesPool = [],     // array of { src, alt, caption }
  id = 'image-grid',
  initialCount = 12,
  crossfadeCount = 6,
}) {
  // ─── INITIAL GRID SETUP ────────────────────────────────────────────────
  const [gridImages, setGridImages] = useState(() => {
    const arr = [...imagesPool]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr.slice(0, initialCount)
  })

  // ─── CROSSFADE SWAP LOGIC ──────────────────────────────────────────────
  const [crossfadeMap, setCrossfadeMap] = useState({})
  const FADE_DURATION = 1000
  const INTERVAL      = 5000

  // Lightbox controls
  const [open, setOpen]   = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const tick = () => {
      if (open) return                      // ◀ pause swaps while lightbox is up
      if (imagesPool.length <= gridImages.length) return

      // pick random slots to swap
      const len   = gridImages.length
      const count = Math.min(crossfadeCount, len, imagesPool.length - len)
      if (count <= 0) return

      const slots = Array.from({ length: len }, (_, i) => i)
      for (let i = len - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[slots[i], slots[j]] = [slots[j], slots[i]]
      }
      const slotsToSwap = slots.slice(0, count)

      // choose replacements
      const shown = new Set(gridImages.map((img) => img.src))
      let candidates = imagesPool.filter((img) => !shown.has(img.src))
      for (let i = candidates.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[candidates[i], candidates[j]] = [candidates[j], candidates[i]]
      }
      const replacements = candidates.slice(0, count)

      // build the fade map
      const newMap = {}
      slotsToSwap.forEach((slotIdx, i) => {
        newMap[slotIdx] = replacements[i]
      })

      setCrossfadeMap(newMap)

      // ◀ SINGLE timeout: swap images + clear fadeMap together
      setTimeout(() => {
        setGridImages((prev) => {
          const copy = [...prev]
          slotsToSwap.forEach((slotIdx) => {
            copy[slotIdx] = newMap[slotIdx]
          })
          return copy
        })
        setCrossfadeMap({})   // clear fades immediately as the swap happens
      }, FADE_DURATION)
    }

    const handle = setInterval(tick, INTERVAL)
    return () => clearInterval(handle)
  }, [imagesPool, gridImages, crossfadeCount, open])

  // ─── LIGHTBOX SLIDES ──────────────────────────────────────────────────
  const slides = imagesPool.map((img) => ({ src: img.src, title: img.caption }))

  // ─── RENDER ────────────────────────────────────────────────────────────
  return (
    <>
      <section id={id} className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {gridImages.map(({ src, alt, caption }, idx) => {
            const isFading = idx in crossfadeMap
            const baseClasses = isFading
              ? 'absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0'
              : 'absolute inset-0 w-full h-full object-cover transition-none opacity-100'

            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg shadow-xl cursor-pointer"
                onClick={() => {
                  const imgIndex = imagesPool.findIndex((img) => img.src === src)
                  setIndex(imgIndex !== -1 ? imgIndex : 0)
                  setOpen(true)
                }}
              >
                <div className="relative w-full h-48">
                  <img src={src} alt={alt} className={baseClasses} />
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
      </section>

      <Divider />

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={index}
          onIndexChange={setIndex}
        />
      )}
    </>
  )
}
