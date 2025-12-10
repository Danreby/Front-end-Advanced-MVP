import React, { useRef, useEffect } from 'react'

export default function RotatingFlowersBackground({ count = 18 }){
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    function rand(a, b){ return a + Math.random() * (b - a) }

    // More harmonious flower colors
    const colors = ['#FFD1DC', '#FFE7B5', '#F7C873', '#F5EBD8', '#FFB100']

    // All flowers have 6 petals, more rounded
    const flowers = Array.from({length: count}).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: rand(32, 56),
      rot: Math.random() * Math.PI * 2,
      rotSpeed: rand(-0.3, 0.3) * 0.003,
      vx: rand(-6, 6) * 0.02,
      vy: rand(-6, 6) * 0.02,
      color: colors[Math.floor(Math.random() * colors.length)],
      petals: 6
    }))

    let raf = null

    function drawFlower(f){
      ctx.save()
      ctx.translate(f.x, f.y)
      ctx.rotate(f.rot)
      const petW = f.size * 0.45
      const petH = f.size * 0.22
      for(let i=0;i<f.petals;i++){
        const a = (i / f.petals) * Math.PI * 2
        ctx.save()
        ctx.rotate(a)
        ctx.beginPath()
        ctx.ellipse(f.size * 0.32, 0, petW, petH, 0, 0, Math.PI * 2)
        ctx.fillStyle = f.color
        ctx.globalAlpha = 0.98
        ctx.shadowColor = '#F7C873'
        ctx.shadowBlur = 6
        ctx.fill()
        ctx.restore()
      }
      // center
      ctx.beginPath()
      ctx.arc(0,0,f.size*0.16,0,Math.PI*2)
      ctx.fillStyle = '#FFB100'
      ctx.shadowColor = '#FFD1DC'
      ctx.shadowBlur = 8
      ctx.fill()
      ctx.restore()
    }

    function frame(){
      ctx.clearRect(0,0,w,h)
      flowers.forEach(f => {
        f.rot += f.rotSpeed
        f.x += f.vx * 0.5
        f.y += f.vy * 0.5
        // wrap
        if (f.x < -60) f.x = w + 60
        if (f.x > w + 60) f.x = -60
        if (f.y < -60) f.y = h + 60
        if (f.y > h + 60) f.y = -60
        drawFlower(f)
      })
      raf = requestAnimationFrame(frame)
    }

    raf = requestAnimationFrame(frame)

    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [count])

  return (
    <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} aria-hidden />
  )
}
