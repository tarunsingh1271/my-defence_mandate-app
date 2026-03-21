import styles from './Nav.module.css'
import logo from '../assets/logo.jpg'
import ThemeToggle from './ThemeToggle'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Defence Mandate" />
      </Link>
      <div className={styles.links}>
        <a href="/#services">Services</a>
        <a href="/#process">Process</a>
        <a href="/#industries">Industries</a>
        <a href="/#contact" className={styles.cta}>Get a Quote</a>
      </div>
      <ThemeToggle />
    </nav>
  )
}
