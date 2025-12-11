import { Link } from 'react-router-dom'
import RevealOnScroll from '../components/RevealOnScroll'
import ImageCarousel from '../components/ImageCarousel'

export default function HomePage({language}) {
  const texts = {
    pt: { title: 'FloriCult', subtitle: 'Arranjos frescos para todas as ocasiões', shop: 'Loja' },
    en: { title: 'FloriCult', subtitle: 'Fresh bouquets for every occasion', shop: 'Shop' }
  }

  const t = texts[language] || texts.pt

  return (
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
  )
}
