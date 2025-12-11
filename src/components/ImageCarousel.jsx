import React from 'react'
import images from './js/carouselImages'
import useCarousel from '../hooks/useCarousel'
import './css/ImageCarousel.css'

export default function ImageCarousel({ interval = 2000, className = '' }) {
  const { index, goTo } = useCarousel({ length: images.length, interval })

  return (
    <div className={`image-carousel ${className}`}>
      <div className="carousel-inner">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`slide-${i}`}
            className={`carousel-image ${i === index ? 'active' : ''}`}
            loading="lazy"
          />
        ))}
      </div>

      <div className="carousel-dots" aria-hidden={images.length <= 1 ? 'true' : 'false'}>
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
