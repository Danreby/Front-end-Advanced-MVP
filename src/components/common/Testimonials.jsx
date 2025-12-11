import React from 'react'

const reviews = [
  { name: 'Carla', text: 'Entrega rápida e arranjo lindo — recomendo!' },
  { name: 'João', text: 'Ótimo atendimento e flores muito frescas.' },
  { name: 'Mariana', text: 'Assinatura mensal fantástica — sempre surpreendem.' },
]

export default function Testimonials(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {reviews.map((r, i) => (
        <div key={i} className="bg-white/5 border border-white/6 rounded-lg p-4 shadow-sm">
          <p className="text-black/80 italic">“{r.text}”</p>
          <div className="mt-3 font-semibold text-black">— {r.name}</div>
        </div>
      ))}
    </div>
  )
}
