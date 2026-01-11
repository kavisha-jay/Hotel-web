'use client'
import { useState } from 'react'

type Props = {
  images: string[]
}

export default function RoomImageSlider({ images }: Props) {
  const [index, setIndex] = useState(0)

  const prev = () =>
    setIndex((index - 1 + images.length) % images.length)

  const next = () =>
    setIndex((index + 1) % images.length)

  return (
    <div className="relative w-full h-[520px] rounded-xl overflow-hidden">
      <img
        src={images[index]}
        className="w-full h-full object-cover"
        alt="Room image"
      />

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full w-10 h-10 flex items-center justify-center text-xl"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full w-10 h-10 flex items-center justify-center text-xl"
      >
        ›
      </button>
    </div>
  )
}
