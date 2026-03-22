import { useState } from 'react'
import type { FormEvent } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className={styles.section} id="contact">
      <div className="reveal">
        <p className={styles.sectionLabel}>// Start a conversation</p>
        <h2 className={styles.title}>
          Let's find<br />your next<br /><em>exceptional</em><br />hire.
        </h2>
      </div>

      {isSubmitted ? (
        <div className={styles.thankYouWrap}>
          <p className={styles.thankYouMessage}>
            Thank you!!<br />Your request is submitted, we will call you shortly.
          </p>
        </div>
      ) : (
        <form className={`${styles.form} reveal`} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.group}>
              <label className={styles.label}>First Name</label>
              <input className={styles.input} type="text" placeholder="James" />
            </div>
            <div className={styles.group}>
              <label className={styles.label}>Last Name</label>
              <input className={styles.input} type="text" placeholder="Whitfield" />
            </div>
          </div>
          <div className={styles.group}>
            <label className={styles.label}>Company</label>
            <input className={styles.input} type="text" placeholder="Meridian Capital Group" />
          </div>
          <div className={styles.group}>
            <label className={styles.label}>Email</label>
            <input className={styles.input} type="email" placeholder="james@meridian.com" />
          </div>
          <div className={styles.group}>
            <label className={styles.label}>Phone Number</label>
            <input className={styles.input} type="tel" placeholder="+91 9876543210" />
          </div>
          <div className={styles.group}>
            <label className={styles.label}>Tell us what you are looking for!</label>
            <input className={styles.input} type="text" placeholder="Security guard, Housekeeper..." />
          </div>
          <button className={styles.btn} type="submit">Send Enquiry →</button>
        </form>
      )}
    </section>
  )
}
