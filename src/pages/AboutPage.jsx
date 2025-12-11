import React, { useState, useEffect } from 'react'
import RevealOnScroll from '../components/RevealOnScroll'
import AboutGallery from '../components/common/AboutGallery'
import TeamGrid from '../components/common/TeamGrid'
import Testimonials from '../components/common/Testimonials'

export default function AboutPage({language}){
  const t = {
    pt: {
      title: 'Sobre este projeto',
      body: 'Este site é um projeto acadêmico — um MVP criado como exercício de front-end para a disciplina. Não é uma floricultura real; foi desenvolvido para demonstrar layout, componentes e integrações básicas.'
    },
    en: {
      title: 'About this project',
      body: "This site is an academic project — an MVP built as a front-end exercise for coursework. It's not a real florist; it's created to showcase layout, components and basic integrations."
    }
  }[language || 'pt']

  return (
    <section id="about" className="min-h-[40vh] p-6 max-w-4xl mx-auto">
      <RevealOnScroll>
        <h2 className="text-3xl font-bold mb-4 text-black">{t.title}</h2>
        <p className="text-black/80">{t.body}</p>
        <div className="mt-6 text-sm text-black/60">Se desejar, posso transformar este projeto em uma versão funcional conectando um backend ou serviços de envio de emails.</div>
      </RevealOnScroll>
    </section>
  )
}
