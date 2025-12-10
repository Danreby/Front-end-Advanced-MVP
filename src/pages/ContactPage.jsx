import SendButton from '../components/common/buttons/SendButton'
import RevealOnScroll from '../components/RevealOnScroll'

export default function ContactPage({language}){
  const texts = {
    pt: { title: 'Contato', body: 'Entre em contato para encomendas e orçamentos. telefone: (00) 0000-0000' },
    en: { title: 'Contact', body: 'Get in touch for orders and quotes. phone: (000) 000-0000' }
  }
  const t = texts[language] || texts.pt

  return (
    <section id="contact" className="min-h-[50vh] p-6 max-w-4xl mx-auto">
      <RevealOnScroll>
        <h2 className="text-3xl font-bold mb-4 text-black">{t.title}</h2>
        <p className="text-black mb-4">{t.body}</p>
        <form className="grid grid-cols-1 gap-4 max-w-xl">
          <input className="p-3 rounded bg-white/5 border border-white/5 text-black" placeholder="Name" />
          <input className="p-3 rounded bg-white/5 border border-white/5 text-black" placeholder="Email" />
          <textarea className="p-3 rounded bg-white/5 border border-white/5 text-black" placeholder="Message" rows={5} />
          <div className="flex justify-start">
            <SendButton label={language === 'pt' ? 'Enviar' : 'Send'} />
          </div>
        </form>
      </RevealOnScroll>
    </section>
  )
}
