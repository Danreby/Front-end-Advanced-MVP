import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RevealOnScroll from '../components/RevealOnScroll'
import ImageCarousel from '../components/ImageCarousel'
import AboutGallery from '../components/common/AboutGallery'
import TeamGrid from '../components/common/TeamGrid'
import Testimonials from '../components/common/Testimonials'

export default function HomePage({language}) {
  const texts = {
    pt: { title: 'FloriCult', subtitle: 'Arranjos frescos para todas as ocasiões', shop: 'Loja', aboutTitle: 'Sobre Nós', aboutIntro: 'Somos uma floricultura dedicada a levar felicidade através de flores frescas e bem cuidadas.' },
    en: { title: 'FloriCult', subtitle: 'Fresh bouquets for every occasion', shop: 'Shop', aboutTitle: 'About Us', aboutIntro: 'We are a florist dedicated to bringing joy through fresh, well-cared-for flowers.' }
  }

  const t = texts[language] || texts.pt
  const [modalSrc, setModalSrc] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    function onKey(e){
      if(e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  function openModal(src){
    setModalSrc(src)
    // allow mount then animate
    requestAnimationFrame(()=> setModalOpen(true))
  }

  function closeModal(){
    setModalOpen(false)
    // wait for animation then unmount
    setTimeout(()=> setModalSrc(null), 260)
  }

  return (
    <>
      <section id="home" className="min-h-[70vh] flex items-center justify-center text-center p-6">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-black mb-4">{t.title}</h1>
              <p className="text-lg sm:text-2xl text-black mb-6">{t.subtitle}</p>
              <Link to="/shop" className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-md text-white font-semibold shadow hover:scale-[1.01] transition">{t.shop}</Link>
            </div>

            <div className="flex items-center justify-center">
              <ImageCarousel interval={2000} />
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section id="home-about" className="py-12 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <header className="mb-6 text-center">
              <h2 className="text-3xl font-bold mb-2 text-black">{t.aboutTitle}</h2>
              <p className="text-black/80 max-w-3xl mx-auto">{t.aboutIntro}</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold text-black mb-2">{language === 'pt' ? 'Nossa História' : 'Our Story'}</h3>
                  <p className="text-black/80">{language === 'pt' ? 'Desde 2010 servindo nossa comunidade com arranjos únicos e um atendimento artesanal. Começamos como um pequeno ateliê e crescemos com base na confiança dos nossos clientes.' : 'Since 2010 we have served our community with unique arrangements and handcrafted care. We started as a small studio and grew through customer trust.'}</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-black mb-2">{language === 'pt' ? 'Missão' : 'Mission'}</h3>
                  <p className="text-black/80">{language === 'pt' ? 'Trazer beleza e emoção através de flores selecionadas, sustentáveis e entregas confiáveis.' : 'Bring beauty and emotion through selected, sustainable flowers and reliable deliveries.'}</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-black mb-2">{language === 'pt' ? 'Serviços' : 'Services'}</h3>
                  <ul className="list-disc list-inside text-black/80 space-y-1">
                    {(language === 'pt' ? ['Buquês para ocasiões especiais','Decoração para eventos','Assinatura mensal de flores','Consultoria de arranjos'] : ['Bouquets for special occasions','Event decoration','Monthly flower subscription','Arrangement consulting']).map((s,i)=>(<li key={i}>{s}</li>))}
                  </ul>
                </section>
              </div>

              <aside>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-white/5">
                  <AboutGallery onImageClick={openModal} />
                </div>
              </aside>
            </div>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-black">{language === 'pt' ? 'Nossa equipe' : 'Our Team'}</h3>
              <TeamGrid />
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-black">{language === 'pt' ? 'O que dizem' : 'Testimonials'}</h3>
              <Testimonials />
            </section>

            <div className="text-sm text-black/60">{language === 'pt' ? 'Trabalhamos com fornecedores locais e opções sazonais para garantir qualidade.' : 'We work with local suppliers and seasonal choices to ensure quality.'}</div>
          </RevealOnScroll>
        </div>
      </section>

      {modalSrc && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-250 ${modalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={closeModal}>
          <div className="absolute inset-0 bg-black/60 transition-opacity duration-300" />
          <div className={`relative max-w-4xl max-h-[90vh] p-4 transform transition-transform duration-300 ${modalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} onClick={(e)=>e.stopPropagation()}>
            <img src={modalSrc} alt="preview" className="w-full h-auto rounded-lg shadow-xl object-contain" />
            <div className="mt-3 text-right">
              <button className="px-3 py-1 bg-white/10 text-white rounded" onClick={closeModal}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
