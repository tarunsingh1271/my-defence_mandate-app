import { useState, useEffect } from 'react'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button className={styles.toggle} onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
