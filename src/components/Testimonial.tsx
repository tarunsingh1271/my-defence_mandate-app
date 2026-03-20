import { useState, useEffect, useCallback } from 'react'
import styles from './Testimonial.module.css'

const testimonials = [
  {
    quote: "Defence mandate didn't just fill the role — they found someone who has genuinely changed the trajectory of our company. The calibre of their process is unlike any recruiter we've worked with.",
    author: 'Sarah Whitmore',
    role: 'Chief People Officer, Meridian Capital Group',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
  },
  {
    quote:
      'The team at defence mandate is phenomenal. They understood our needs perfectly and delivered a candidate who was a perfect fit for our culture and our team. We could not be happier.',
    author: 'John Doe',
    role: 'CEO, Tech Innovations',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
  {
    quote:
      "Working with defence mandate has been a game-changer for us. Their dedication and expertise in finding top talent is unmatched. I would recommend them to anyone looking to build a strong team.",
    author: 'Jane Smith',
    role: 'CTO, Future Solutions',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
  },
]

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }, [])

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused, currentIndex, handleNext])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handlePrev, handleNext])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section
      className={styles.testimonial}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h2 className={styles.heading}>What Our Clients Say</h2>
      <div className={`${styles.fade}`} key={currentIndex}>
        <div className={styles.quoteMark}>"</div>
        <p className={styles.quoteText}>{currentTestimonial.quote}</p>
        <div className={styles.quoteAuthor}>
          <p className={styles.authorName}>{currentTestimonial.author}</p>
          <p className={styles.authorRole}>{currentTestimonial.role}</p>
        </div>
      </div>
      <div className={`${styles.visual} ${styles.fade}`} key={currentIndex + 'img'}>
        <img src={currentTestimonial.image} alt="Client" />
      </div>
      
      <div className={styles.dots}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}
