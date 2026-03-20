import styles from './Hero.module.css'
import { useReveal } from '../hooks/useReveal';

export default function Hero() {
  useReveal();
  return (
    <section className={`${styles.hero} reveal`}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          The <em>right</em>
          <br />
          people,
          <br />
          precisely
          <br />
          placed.
        </h1>
        <p className={styles.tag}>// Executive & Specialist Recruitment</p>
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
          src="/heroBanner1.png"
          alt="Hero banner showing a Taj Mahal and security Persons in the foreground"
        />
      </div>

      <div className={styles.statBar}>
        <div className={styles.stat}>
          <span className={styles.statNum}>400+</span>
          <span className={styles.statLabel}>Placements made</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>94%</span>
          <span className={styles.statLabel}>Retention rate</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>2 years</span>
          <span className={styles.statLabel}>Industry depth</span>
        </div>
      </div>
    </section>
  )
}
