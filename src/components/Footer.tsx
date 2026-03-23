import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <p className={styles.logo}>Defence Mandate Pvt Ltd <span>.</span></p>
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
          <Link to="/about">About Us</Link>
          <Link to="/team">Our Team</Link>
          <a href="#">Insights</a>
        </div>
        <div className={styles.col}>
          <p className={styles.colTitle}>Contact us</p>
          <a href="#">Agra Office</a>
          <a href="#">defencemandate@gmail.com</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copy}>© 2026 Defence Mandate Ltd. All rights reserved.</p>
        <div className={styles.socials}>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
