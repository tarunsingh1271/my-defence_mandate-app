import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.tag}>// Executive &amp; Specialist Recruitment</p>
        <h1 className={styles.title}>
          The <em>right</em><br />people,<br />precisely<br />placed.
        </h1>
        <p className={styles.sub}>
          We connect exceptional organisations with the rare talent that defines
          their next chapter. No noise. No compromises.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary}>Find Talent</a>
          <a href="#services" className={styles.btnGhost}>Our Process</a>
        </div>
      </div>

      <div className={styles.right}>
        <img
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80"
          alt="Professional team collaborating in a modern office setting"
        />
      </div>

      <div className={styles.statBar}>
        <div className={styles.stat}>
          <span className={styles.statNum}>2,400+</span>
          <span className={styles.statLabel}>Placements made</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>94%</span>
          <span className={styles.statLabel}>Retention rate</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>18 yrs</span>
          <span className={styles.statLabel}>Industry depth</span>
        </div>
      </div>
    </section>
  )
}
