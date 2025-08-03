import { useState, FC } from 'react'
import styles from './TopDestinations.module.css'

type Destination = {
  city: string
  imageUrl: string
  price: string
}

const destinations: Destination[] = [
  { city: 'London',    imageUrl: 'https://lp-cms-production.imgix.net/2024-12/GettyRF178407725.jpg?auto=format,compress&q=72&fit=crop',    price: '21.99' },
  { city: 'Berlin',    imageUrl: 'https://lp-cms-production.imgix.net/2024-12/GettyRF178407725.jpg?auto=format,compress&q=72&fit=crop',    price: '51.99' },
  { city: 'Paris',     imageUrl: 'https://lp-cms-production.imgix.net/2024-12/GettyRF178407725.jpg?auto=format,compress&q=72&fit=crop',     price: '69.99' },
  { city: 'Rome',      imageUrl: 'https://lp-cms-production.imgix.net/2024-12/GettyRF178407725.jpg?auto=format,compress&q=72&fit=crop',      price: '79.99' },
  { city: 'Vienna',    imageUrl: 'https://lp-cms-production.imgix.net/2024-12/GettyRF178407725.jpg?auto=format,compress&q=72&fit=crop',    price: '81.99' },
  { city: 'Barcelona', imageUrl: 'https://lp-cms-production.imgix.net/2024-12/GettyRF178407725.jpg?auto=format,compress&q=72&fit=crop', price: '99.99' },

  
  { city: 'Amsterdam', imageUrl: 'https://lp-cms-production.imgix.net/2024-12/GettyRF178407725.jpg?auto=format,compress&q=72&fit=crop', price: '59.99' },
  { city: 'Prague',    imageUrl: 'https://lp-cms-production.imgix.net/2024-12/GettyRF178407725.jpg?auto=format,compress&q=72&fit=crop',    price: '45.99' },
  { city: 'Lisbon',    imageUrl: 'https://lp-cms-production.imgix.net/2024-12/GettyRF178407725.jpg?auto=format,compress&q=72&fit=crop',    price: '65.99' },
]

const TopDestinations: FC = () => {
  const [visibleCount, setVisibleCount] = useState(6)

  const handleMore = () => {
    setVisibleCount(count => Math.min(count + 3, destinations.length))
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>Top destinations from:</h3>
        <select className={styles.select}>
          <option>Vilnius</option>
        </select>
      </div>

      <div className={styles.grid}>
        {destinations.slice(0, visibleCount).map(d => (
          <div key={d.city} className={styles.card}>
            <img src={d.imageUrl} alt={d.city} className={styles.image} />
            <div className={styles.priceTag}>
              <span>From</span>
              <strong>€{d.price}</strong>
            </div>
            <div className={styles.label}>{d.city}</div>
          </div>
        ))}
      </div>

      {visibleCount < destinations.length && (
        <button className={styles.button} onClick={handleMore}>
          More deals  ▼
        </button>
      )}
    </section>
  )
}

export default TopDestinations