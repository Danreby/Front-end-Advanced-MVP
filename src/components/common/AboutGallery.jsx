import React from 'react'

const images = [
  '/img/rose.jpg',
  '/img/buque_mix_531_1_bd6c52fc9ff2578a52c635db667da679.jpg',
  '/img/girassol.jpg',
  '/img/lavanda.jpg',
  '/img/orquidea.jpg',
  '/img/hortensia.jpeg'
]

export default function AboutGallery({ onImageClick }){
  return (
    <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {images.map((src, i) => (
        <button
          key={i}
          onClick={() => onImageClick && onImageClick(src)}
          className="overflow-hidden rounded-lg shadow-sm p-0 border-0 bg-transparent"
          aria-label={`Open image ${i}`}
        >
          <img loading="lazy" src={src} alt={`gallery-${i}`} className="w-full h-36 md:h-44 object-cover transform hover:scale-105 transition-transform duration-300 cursor-pointer" />
        </button>
      ))}
    </div>
  )
}
