import { useState, useEffect } from 'react'
import styles from './Preloader.module.css'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Simulate a 2-second loading time
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`${styles.preloader} ${isLoading ? '' : styles.hidden}`}>
      <div className={styles.spinner}></div>
    </div>
  )
}
