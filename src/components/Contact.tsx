import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className="reveal">
        <p className={styles.sectionLabel}>// Start a conversation</p>
        <h2 className={styles.title}>
          Let's find<br />your next<br /><em>exceptional</em><br />hire.
        </h2>
      </div>

      <div className={`${styles.form} reveal`}>
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
          <label className={styles.label}>Tell us about the role</label>
          <input className={styles.input} type="text" placeholder="CFO hire, circa £200k, London..." />
        </div>
        <button className={styles.btn}>Send Enquiry →</button>
      </div>
    </section>
  )
}
