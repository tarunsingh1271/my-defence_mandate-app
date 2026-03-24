import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './index.css'
import App from './App.tsx'
import AboutPage from './pages/AboutPage.tsx'
import TeamPage from './pages/TeamPage.tsx'
import CareerPage from './pages/CareerPage.tsx'

function HashScrollHandler() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)

    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [location])

  return null
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <HashScrollHandler />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/careers" element={<CareerPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
