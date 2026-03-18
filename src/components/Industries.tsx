import { useState } from 'react'
import styles from './Industries.module.css'

const tags = [
  'Technology', 'Financial Services', 'Life Sciences', 'Professional Services',
  'Consumer & Retail', 'Energy & Infrastructure', 'Private Equity', 'Education',
  'Media & Creative', 'Healthcare', 'Government & Public Sector', 'Manufacturing',
]

export default function Industries() {
  const [active, setActive] = useState('Technology')

  return (
    <section className={styles.industries} id="industries">
      <div className={`${styles.header} reveal`}>
        <p className={styles.sectionLabel}>// Sectors we serve</p>
        <h2 className={styles.sectionTitle}>
          Where we<br />have <em>depth.</em>
        </h2>
      </div>
      <div className={`${styles.tags} reveal`}>
        {tags.map(tag => (
          <button
            key={tag}
            className={`${styles.tag} cursorTarget ${active === tag ? styles.active : ''}`}
            onClick={() => setActive(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  )
}
