import { useEffect, useState } from 'react'
import productsData from '../data/products.json'
import { getImagePath } from '../utils/imagePath'

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
        const withResolvedImages = productsData.map(p => ({
          ...p,
          img: p.img ? getImagePath(p.img.replace(/^\//, '')) : p.img,
        }))
        setProducts(withResolvedImages)
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
