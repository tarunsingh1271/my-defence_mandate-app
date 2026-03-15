import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), 100)
          }
        })
      },
      { threshold: 0.1 }
    )
    reveals.forEach(r => observer.observe(r))
    return () => observer.disconnect()
  }, [])
}
