import { Link } from 'react-router-dom'

const sampleProducts = [
  { id: 'rose', name: 'Buquê de Rosas', price: 'R$ 79,90', img: '' },
  { id: 'tulip', name: 'Tulipas Sortidas', price: 'R$ 59,90', img: '' },
  { id: 'orchid', name: 'Orquídea Elegante', price: 'R$ 129,90', img: '' },
]

export default function ShopPage({language}){
  const texts = {
    pt: { title: 'Loja', add: 'Adicionar ao carrinho' },
    en: { title: 'Shop', add: 'Add to cart' }
  }
  const t = texts[language] || texts.pt

  return (
    <section id="shop" className="min-h-[60vh] p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-black">{t.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProducts.map(p => (
          <article key={p.id} className="bg-white/60 p-4 rounded-lg shadow-md border border-white/5">
            <div className="h-40 bg-gradient-to-br from-green-200/5 to-pink-200/5 rounded mb-4 flex items-center justify-center text-gray-500">Imagem</div>
            <h3 className="font-semibold mb-2 text-black">{p.name}</h3>
            <div className="text-black font-bold mb-4">{p.price}</div>
            <button className="px-4 py-2 bg-green-500 hover:bg-emerald-500 rounded text-white">{t.add}</button>
          </article>
        ))}
      </div>
    </section>
  )
}
