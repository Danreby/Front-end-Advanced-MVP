import FlowerIcon from '../components/common/FlowerIcon'
import RevealOnScroll from '../components/RevealOnScroll'

export default function AboutPage({language}){
  const texts = {
    pt: { title: 'Sobre Nós', body: 'Somos uma floricultura dedicada a levar felicidade através de flores frescas e bem cuidadas.' },
    en: { title: 'About Us', body: 'We are a florist dedicated to bringing joy through fresh, well-cared-for flowers.' }
  }
  const t = texts[language] || texts.pt

  return (
    <section id="about" className="min-h-[50vh] p-6 max-w-4xl mx-auto">
      <RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-black">{t.title}</h2>
            <p className="text-black">{t.body}</p>
          </div>
          <div className="flex items-center justify-center">
            <FlowerIcon size={180} />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
