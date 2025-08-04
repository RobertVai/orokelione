import { useState, FC } from 'react'
import styles from './HotDealsCarousel.module.css'

type Deal = {
  city: string
  imageUrl: string
  price: string
}

const deals: Deal[] = [
  { city: 'Corfu',  imageUrl: '/images/corfu.jpg',  price: '99.99' },
  { city: 'Athens', imageUrl: '/images/athens.jpg', price: '121.99' },
  { city: 'Malaga', imageUrl: '/images/malaga.jpg', price: '130.99' },
  { city: 'Rome',   imageUrl: '/images/rome.jpg',   price: '79.99' },
  { city: 'Vienna', imageUrl: '/images/vienna.jpg', price: '81.99' },
  { city: 'Mallorca', imageUrl: '/images/corfu.jpg', price: '81.99' },
]

const HotDealsCarousel: FC = () => {
  const [index, setIndex] = useState(0)
  const visibleCount = 3
  const maxIndex = deals.length - visibleCount       
  const steps = maxIndex + 1                         

  const prev = () => {
    setIndex(i => (i - 1 + steps) % steps)
  }

  const next = () => {
    setIndex(i => (i + 1) % steps)
  }

  return (
    <section className={styles.carouselSection}>
      <h3 className={styles.heading}>
        Hot summer deals from:&nbsp;
        <select className={styles.select}>
          <option>Vilnius</option>
        </select>
      </h3>

      <div className={styles.viewport}>
        <button
          className={styles.arrowLeft}
          onClick={prev}
          aria-label="Previous"
        >
          ‹
        </button>

        <div
          className={styles.track}
          style={{
            transform: `translateX(-${index * (100 / visibleCount)}%)`,
          }}
        >
          {deals.map((deal, idx) => {
            const isCenter = idx === index + 1
            return (
              <div key={deal.city} className={styles.card}>
                <div
                  className={`${styles.cardInner} ${
                    isCenter ? styles.centerInner : ''
                  }`}
                >
                  <img
                    src={deal.imageUrl}
                    alt={deal.city}
                    className={styles.image}
                  />

                  <div className={styles.fireTag}>
                    <img
                      src="/fire-svgrepo-com.svg"
                      alt="fire icon"
                      className={styles.fireIcon}
                    />
                    <div className={styles.fireText}>
                      From<br />€{deal.price}
                    </div>
                  </div>

                  <div className={styles.label}>{deal.city}</div>
                </div>
              </div>
            )
          })}
        </div>

        <button
          className={styles.arrowRight}
          onClick={next}
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </section>
  )
}

export default HotDealsCarousel