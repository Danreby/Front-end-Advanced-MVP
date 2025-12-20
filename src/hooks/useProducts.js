import { useEffect, useState } from 'react'
import productsData from '../data/products.json'

// Simula uma requisição a servidor lendo um JSON local
export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    const timer = setTimeout(() => {
      if (cancelled) return
      try {
        // Leitura do JSON local simulando resposta de API
        setProducts(productsData)
      } catch (err) {
        console.error('Erro ao carregar produtos:', err)
        setError('Erro ao carregar dados de produtos.')
      } finally {
        setLoading(false)
      }
    }, 800)

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [])

  return { products, loading, error }
}
