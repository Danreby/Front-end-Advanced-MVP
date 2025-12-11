import React from 'react'
import SocialIcon from './icons/SocialIcon'

export default function SocialLinks({ size = 40 }){
  const items = [
    { key: 'facebook', href: 'https://facebook.com', bg: 'bg-blue-600 hover:bg-blue-700' },
    { key: 'instagram', href: 'https://instagram.com', bg: 'bg-pink-500 hover:bg-pink-600' },
    { key: 'whatsapp', href: 'https://wa.me/', bg: 'bg-green-500 hover:bg-green-600' },
  ]

  return (
    <div className="flex items-center gap-3">
      {items.map(i => (
        <a
          key={i.key}
          href={i.href}
          target="_blank"
          rel="noreferrer"
          aria-label={i.key}
          className={`${i.bg} w-20 h-20 rounded-full inline-flex items-center justify-center shadow-md transition-colors`}
        >
          <SocialIcon type={i.key} size={size} color={"text-white"} />
        </a>
      ))}
    </div>
  )
}
