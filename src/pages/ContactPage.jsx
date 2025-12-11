import RevealOnScroll from '../components/RevealOnScroll'
import ContactForm from '../components/common/ContactForm'

export default function ContactPage({language}){
  const texts = {
    pt: { title: 'Contato', body: 'Entre em contato para encomendas e orçamentos.' },
    en: { title: 'Contact', body: 'Get in touch for orders and quotes.' }
  }
  const t = texts[language] || texts.pt

  return (
    <section id="contact" className="min-h-[60vh] p-6 max-w-5xl mx-auto">
      <RevealOnScroll>
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 text-black">{t.title}</h2>
          <p className="text-black/80">{t.body}</p>
        </div>

        <ContactForm language={language} />
      </RevealOnScroll>
    </section>
  )
}
