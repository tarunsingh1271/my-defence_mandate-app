import styles from './Testimonial.module.css'

export default function Testimonial() {
  return (
    <section className={styles.testimonial}>
      <div className="reveal">
        <div className={styles.quoteMark}>"</div>
        <p className={styles.quoteText}>
          Apex didn't just fill the role — they found someone who has genuinely changed the trajectory of our company. The calibre of their process is unlike any recruiter we've worked with.
        </p>
        <div className={styles.quoteAuthor}>
          <p className={styles.authorName}>Sarah Whitmore</p>
          <p className={styles.authorRole}>Chief People Officer, Meridian Capital Group</p>
        </div>
      </div>
      <div className={`${styles.visual} reveal`}>
        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
          alt="Client"
        />
      </div>
    </section>
  )
}
