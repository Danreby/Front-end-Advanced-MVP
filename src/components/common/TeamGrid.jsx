import React from 'react'

const team = [
  { name: 'Ana Silva', role: 'Florista Chefe', img: '/img/img_12_1.jpg' },
  { name: 'Marcos Lima', role: 'Designer de Arranjos', img: '/img/rose.jpg' },
  { name: 'Beatriz Costa', role: 'Atendimento', img: '/img/lavanda.jpg' },
]

export default function TeamGrid(){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {team.map((m, i) => (
        <div key={i} className="bg-white/5 border border-white/6 rounded-lg p-4 flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-3 rounded-full overflow-hidden shadow-md">
            <img loading="lazy" src={m.img} alt={m.name} className="w-full h-full object-cover" />
          </div>
          <div className="font-semibold text-black">{m.name}</div>
          <div className="text-sm text-black/70">{m.role}</div>
        </div>
      ))}
    </div>
  )
}
