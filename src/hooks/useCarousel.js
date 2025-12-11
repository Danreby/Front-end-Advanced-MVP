import { useState, useEffect, useRef } from 'react'

export default function useCarousel({ length, interval = 2000 }) {
  const [index, setIndex] = useState(0)
  const savedCallback = useRef(null)

  useEffect(() => {
    savedCallback.current = () => {
      setIndex((i) => (i + 1) % length)
    }
  }, [length])

  useEffect(() => {
    if (!length || length <= 1) return undefined
    const tick = () => savedCallback.current && savedCallback.current()
    const id = setInterval(tick, interval)
    return () => clearInterval(id)
  }, [interval, length])

  const goTo = (i) => setIndex(((i % length) + length) % length)

  return { index, goTo }
}
