import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../context/ToastContext'
import RevealOnScroll from '../components/RevealOnScroll'
import { Card, CardImage, CardHeader, CardFooter } from '../components/common/Card'
import { EmptyState } from '../components/common/EmptyState'
import Tooltip from '../components/common/Tooltip'
import { LoadingSpinner } from '../components/common/LoadingSpinner'

const sampleProducts = [
  { id: 'rose', name: 'Buquê de Rosas', price: 'R$ 79,90', img: '/img/images.jfif' },
  { id: 'tulip', name: 'Tulipas Sortidas', price: 'R$ 59,90', img: '/img/images (1).jfif' },
  { id: 'orchid', name: 'Orquídea Elegante', price: 'R$ 129,90', img: '/img/images.jfif' },
  { id: 'sunflower', name: 'Mio Girassole', price: 'R$ 89,90', img: '/img/images (1).jfif' },
  { id: 'lily', name: 'Lirio do Vale', price: 'R$ 69,90', img: '/img/images.jfif' },
  { id: 'daisy', name: 'Margarida', price: 'R$ 99,90', img: '/img/images (1).jfif' },
  { id: 'gerbera', name: 'Gerberas', price: 'R$ 139,90', img: '/img/images.jfif' },
  { id: 'lavender', name: 'Lavanda', price: 'R$ 49,90', img: '/img/images (1).jfif' },
  { id: 'hydrangea', name: 'Hortênsia', price: 'R$ 149,90', img: '/img/images.jfif' },
]

export default function ShopPage({language}){
  const navigate = useNavigate()
  const { success } = useToast()
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  const texts = useMemo(() => ({
    pt: { 
      title: 'Loja', 
      add: 'Adicionar ao carrinho',
      search: 'Pesquisar produtos...',
      noResults: 'Nenhum produto encontrado',
      noResultsDesc: 'Tente outra busca ou veja todos os produtos',
      seeDetails: 'Ver Detalhes'
    },
    en: { 
      title: 'Shop', 
      add: 'Add to cart',
      search: 'Search products...',
      noResults: 'No products found',
      noResultsDesc: 'Try another search or view all products',
      seeDetails: 'View Details'
    }
  }), [])

  const t = texts[language] || texts.pt

  React.useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  const filteredProducts = sampleProducts.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddToCart = (product) => {
    success(`${product.name} adicionado ao carrinho!`)
  }

  if (loading) {
    return (
      <section className="min-h-[60vh] p-6 max-w-6xl mx-auto flex items-center justify-center">
        <LoadingSpinner size="lg" text={language === 'pt' ? 'Carregando produtos...' : 'Loading products...'} />
      </section>
    )
  }

  return (
    <section id="shop" className="min-h-[60vh] p-6 max-w-6xl mx-auto">
      <RevealOnScroll>
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-black">{t.title}</h2>
          
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder={t.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/60 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>
        </div>

        {/* Products Grid or Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(p => (
              <Card key={p.id} hover>
                <CardImage src={p.img} alt={p.name} />
                <CardHeader title={p.name} />
                <CardFooter>
                  <span className="font-bold text-emerald-600">{p.price}</span>
                  <div className="flex gap-2">
                    <Tooltip text={t.seeDetails} position="top">
                      <button
                        onClick={() => navigate(`/product/${p.id}`)}
                        className="px-3 py-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded text-sm font-semibold transition"
                      >
                        👁️
                      </button>
                    </Tooltip>
                    <Tooltip text={t.add} position="top">
                      <button
                        onClick={() => handleAddToCart(p)}
                        className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded text-sm font-semibold transition"
                      >
                        🛒
                      </button>
                    </Tooltip>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <EmptyState
            icon="🔍"
            title={t.noResults}
            description={t.noResultsDesc}
            action={
              <button
                onClick={() => setSearchTerm('')}
                className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition"
              >
                {language === 'pt' ? 'Ver Todos os Produtos' : 'View All Products'}
              </button>
            }
          />
        )}
      </RevealOnScroll>
    </section>
  )
}