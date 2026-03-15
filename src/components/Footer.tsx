import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <p className={styles.logo}>Defence Mandate <span>.</span></p>
          <p className={styles.tagline}>
            Connecting exceptional organisations with the talent that defines their future.
          </p>
        </div>
        <div className={styles.col}>
          <p className={styles.colTitle}>Services</p>
          <a href="#">Executive Search</a>
          <a href="#">Specialist Roles</a>
          <a href="#">Talent Advisory</a>
        </div>
        <div className={styles.col}>
          <p className={styles.colTitle}>Company</p>
          <a href="#">About Apex</a>
          <a href="#">Our Team</a>
          <a href="#">Case Studies</a>
          <a href="#">Insights</a>
        </div>
        <div className={styles.col}>
          <p className={styles.colTitle}>Contact</p>
          <a href="#">London Office</a>
          <a href="#">New York Office</a>
          <a href="#">hello@apextalent.com</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copy}>© 2026 Defence Mandate Ltd. All rights reserved.</p>
        <div className={styles.socials}>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
