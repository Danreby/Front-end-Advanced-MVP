import React from 'react'

export default function FlowerIcon({ size = 120, className = '' }){
  const s = typeof size === 'number' ? size : 120
  return (
    <svg width={s} height={s} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g transform="translate(50,50)">
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const x = Math.cos(angle) * 22
          const y = Math.sin(angle) * 22
          return (
            <ellipse key={i} cx={x} cy={y} rx={12} ry={6} fill="#FFD1DC" transform={`rotate(${(angle*180/Math.PI).toFixed(2)})`} />
          )
        })}
        <circle cx={0} cy={0} r={10} fill="#FFB100" />
      </g>
    </svg>
  )
}
