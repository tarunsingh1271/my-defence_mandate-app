import { useEffect } from 'react'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Process from './components/Process'
import Industries from './components/Industries'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  // Re-run cursor targeting after mount so dynamic elements are included
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    if (!cursor) return

    const addExpanded = () => cursor.classList.add('expanded')
    const removeExpanded = () => cursor.classList.remove('expanded')

    const targets = document.querySelectorAll('a, button, .cursorTarget')
    targets.forEach(el => {
      el.addEventListener('mouseenter', addExpanded)
      el.addEventListener('mouseleave', removeExpanded)
    })

    return () => {
      targets.forEach(el => {
        el.removeEventListener('mouseenter', addExpanded)
        el.removeEventListener('mouseleave', removeExpanded)
      })
    }
  }, [])

  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Industries />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}
