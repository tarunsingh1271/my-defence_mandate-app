import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>
        APEX<span>.</span>
      </a>
      <div className={styles.links}>
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#industries">Industries</a>
        <a href="#contact" className={styles.cta}>Hire Talent</a>
      </div>
    </nav>
  )
}
