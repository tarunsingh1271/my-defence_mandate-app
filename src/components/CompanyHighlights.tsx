import { useEffect, useState } from 'react'
import styles from './CompanyHighlights.module.css'
import Hero from './Hero'
import Marquee from './Marquee'
import Services from './Services'
import Process from './Process'
import Industries from './Industries'

const ownerPhotoUrl =
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80&auto=format&fit=crop'

const slides = [
  {
    key: 'home',
    title: 'Home',
    subtitle: 'Hero and core sections',
  },
  {
    key: 'company',
    title: 'Defence Mandate Facility Management & Secure Solutions Pvt Ltd',
    subtitle: 'What we do and how we do',
  },
  {
    key: 'founder',
    title: 'A note from the founder',
    subtitle: 'How we started and the mission we carry forward',
  },
] as const

export default function CompanyHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isResetting, setIsResetting] = useState(false)
  const totalSlides = slides.length

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev >= totalSlides ? 1 : prev + 1))
    }, 5000)

    return () => window.clearInterval(interval)
  }, [totalSlides])

  useEffect(() => {
    if (!isResetting) return

    const frame = window.requestAnimationFrame(() => {
      setIsResetting(false)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [isResetting])

  const handleTransitionEnd = () => {
    if (currentIndex === totalSlides) {
      setIsResetting(true)
      setCurrentIndex(0)
    }
  }

  const activeDotIndex = currentIndex === totalSlides ? 0 : currentIndex

  return (
    <section className={styles.section} aria-label="Homepage slider">
      <div
        className={styles.track}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isResetting ? 'none' : undefined,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        <article className={`${styles.slide} ${styles.homeSlide}`}>
          <Hero />
          <Marquee />
          <Services />
          <Process />
          <Industries />
        </article>

        <article className={styles.slide}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>Greetings</p>
            <h2 className={styles.title}>{slides[1].title}</h2>
            <p className={styles.subtitle}>{slides[1].subtitle}</p>
            <p className={styles.paragraph}>
              We are pleased to connect with you. Please let us know how we can assist you with
              your manpower and facility requirements.
            </p>

            <div className={styles.serviceBlock}>
              <h3>Our Services</h3>
              <ul>
                <li>Security Guards</li>
                <li>Housekeeping Staff</li>
                <li>Waiters</li>
                <li>Kitchen Stewards</li>
                <li>HR Support</li>
                <li>F&amp;B Staff</li>
                <li>Front Desk Executives</li>
                <li>Receptionists and more</li>
              </ul>
            </div>

            <div className={styles.contacts}>
              <p>For service and inquiries contact us:</p>
              <p>
                <strong>Dharmender Singh:</strong> 9041390689
              </p>
              <p>
                <strong>Udit Shrivastava:</strong> 8279422734
              </p>
            </div>
          </div>
        </article>

        <article className={styles.slide}>
          <div className={styles.slideWithImage}>
            <div className={styles.photoWrap}>
              <img src={ownerPhotoUrl} alt="Founder portrait" className={styles.photo} />
            </div>
            <div className={styles.content}>
              <p className={styles.eyebrow}>Founder Story</p>
              <h2 className={styles.title}>{slides[2].title}</h2>
              <p className={styles.subtitle}>{slides[2].subtitle}</p>
              <p className={styles.paragraph}>
                We started with one belief: dependable people power every successful operation. In
                the early days, we worked mandate by mandate, building trust through disciplined
                screening, transparent communication, and on-ground support.
              </p>
              <p className={styles.paragraph}>
                Today, our mission remains the same: deliver reliable staffing and facility
                solutions that protect service quality, reduce hiring pressure, and help clients
                scale with confidence.
              </p>
              <p className={styles.signature}>With respect, Team Defence Mandate</p>
            </div>
          </div>
        </article>

        <article className={`${styles.slide} ${styles.homeSlide}`} aria-hidden="true">
          <Hero />
          <Marquee />
          <Services />
          <Process />
          <Industries />
        </article>
      </div>

      <div className={styles.dots}>
        {slides.map((slide, index) => (
          <button
            key={slide.key}
            type="button"
            className={`${styles.dot} ${index === activeDotIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
