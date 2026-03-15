import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const onMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    const addExpanded = () => cursor.classList.add(styles.expanded)
    const removeExpanded = () => cursor.classList.remove(styles.expanded)

    document.addEventListener('mousemove', onMove)

    const targets = document.querySelectorAll('a, button, .cursorTarget')
    targets.forEach(el => {
      el.addEventListener('mouseenter', addExpanded)
      el.addEventListener('mouseleave', removeExpanded)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', addExpanded)
        el.removeEventListener('mouseleave', removeExpanded)
      })
    }
  }, [])

  return <div ref={cursorRef} className={styles.cursor} id="cursor" />
}
