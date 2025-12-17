import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../../context/ToastContext'
import SendButton from './buttons/SendButton'
import SocialLinks from './SocialLinks'

export default function ContactForm({ language }){
  const isPt = language === 'pt'
  const navigate = useNavigate()
  const { success, error } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      error(isPt ? 'Preencha todos os campos' : 'Fill all fields')
      return
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      error(isPt ? 'Email inválido' : 'Invalid email')
      return
    }

    setLoading(true)
    
    // Simula envio
    setTimeout(() => {
      success(isPt ? 'Mensagem enviada com sucesso!' : 'Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
      setLoading(false)
      
      // Redireciona após 2 segundos
      setTimeout(() => navigate('/'), 2000)
    }, 1500)
  }

  return (
    <div className="bg-white/5 border border-white/6 rounded-2xl p-6 md:p-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl font-bold text-black mb-2">{isPt ? 'Fale conosco' : 'Get in touch'}</h3>
          <p className="text-sm text-black/80 mb-4">{isPt ? 'Preencha o formulário e responderemos em breve.' : 'Fill the form and we will reply shortly.'}</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="text-sm text-black/70">{isPt ? 'Nome' : 'Name'}</span>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
                aria-label="name" 
                className="mt-1 block w-full rounded-lg bg-white/5 border border-white/6 px-3 py-2 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-300 disabled:opacity-50" 
                placeholder={isPt ? 'Seu nome' : 'Your name'} 
              />
            </label>

            <label className="block">
              <span className="text-sm text-black/70">Email</span>
              <input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                aria-label="email" 
                className="mt-1 block w-full rounded-lg bg-white/5 border border-white/6 px-3 py-2 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-300 disabled:opacity-50" 
                placeholder={isPt ? 'seu@email.com' : 'you@email.com'} 
              />
            </label>

            <label className="block">
              <span className="text-sm text-black/70">{isPt ? 'Mensagem' : 'Message'}</span>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
                aria-label="message" 
                rows={5} 
                className="mt-1 block w-full rounded-lg bg-white/5 border border-white/6 px-3 py-2 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-300 disabled:opacity-50" 
                placeholder={isPt ? 'Escreva sua mensagem aqui...' : 'Write your message here...'} 
              />
            </label>

            <div className="flex items-center gap-4">
              <SendButton label={loading ? (isPt ? 'Enviando...' : 'Sending...') : (isPt ? 'Enviar' : 'Send')} disabled={loading} />
              <div className="text-sm text-black/70">{isPt ? 'ou nos encontre nas redes' : 'or find us on social'}</div>
            </div>
          </form>
        </div>

        <aside className="flex flex-col justify-between items-start">
          <div className="w-full mb-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-emerald-200/10 to-pink-200/10 border border-white/4">
              <h4 className="font-semibold text-black">{isPt ? 'Informações' : 'Info'}</h4>
              <p className="text-sm text-black/70 mt-2">{isPt ? 'Telefone: (00) 0000-0000' : 'Phone: (000) 000-0000'}</p>
              <p className="text-sm text-black/70">{isPt ? 'Email: contato@exemplo.com' : 'Email: contact@example.com'}</p>
            </div>
          </div>

          <div className="w-full">
            <SocialLinks />
          </div>

          <div className="w-full mt-4 text-xs text-black/60">{isPt ? 'Atendemos por WhatsApp das 9h às 18h.' : 'We answer on WhatsApp from 9am to 6pm.'}</div>
        </aside>
      </div>
    </div>
  )
}
