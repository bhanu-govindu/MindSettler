import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'

export default function DesiGallery() {
  const [ref, inView] = useInView()
  const [index, setIndex] = useState(0)
  const containerRef = useRef(null)

  const images = [
    'desi-1.jpg',
    'desi-2.jpg',
    'desi-3.jpg',
    'desi-4.jpg',
    'desi-5.jpg',
    'desi-6.jpg',
    'desi-7.jpg',
    'desi-8.jpg',
  ]

  const total = images.length

  function next() {
    setIndex((i) => (i + 1) % total)
  }

  function prev() {
    setIndex((i) => (i - 1 + total) % total)
  }



  useEffect(() => {
    if (!inView) return
    function onKey(e) {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [inView])

  return (
    <section id="desi-gallery" className={`section ${inView ? 'in-view' : ''}`} ref={ref}>
      <div className="section-header">
        <p className="eyebrow">Desi Mental Health Dictionary</p>
        <h2>Illustrated cards — simple, warm, familiar</h2>
      </div>

      <div className="desi-carousel" ref={containerRef} aria-roledescription="carousel">
        <div className="desi-card">
          <img
            key={images[index]}
            className="desi-img desi-img-current animate"
            src={`/desi/${images[index]}`}
            alt={images[index]}
            loading="eager"
            onError={(e) => { e.currentTarget.style.opacity = 0.25 }}
          />

          <div className="desi-caption">
            <div className="desi-caption-inner">
              <strong>{images[index].replace(/[-.jpg]/g, ' ')}</strong>
            </div>
          </div>
        </div>

        <button type="button" className="desi-arrow desi-prev" aria-label="Previous" onClick={prev}>
          ‹
        </button>
        <button type="button" className="desi-arrow desi-next" aria-label="Next" onClick={next}>
          ›
        </button>

        <div className="desi-indicators">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`desi-dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to card ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <p className="muted" style={{ textAlign: 'center', marginTop: '1rem' }}>
        Tip: add the artwork files to <strong>frontend/public/desi/</strong> using the filenames above.
      </p>
    </section>
  )
}
