import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Cursor from '../components/Cursor'
import styles from './CareerPage.module.css'

interface JobOpening {
  id: string
  title: string
  location: string
  department: string
  description: string
  [key: string]: string
}

function parseCSVLine(line: string): string[] {
  const values: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]

    if (char === '"') {
      // Handle escaped quotes inside a quoted value
      if (inQuotes && line[i + 1] === '"') {
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
      continue
    }

    if (char === ',' && !inQuotes) {
      values.push(current.trim().replace(/\r/g, ''))
      current = ''
      continue
    }

    current += char
  }

  values.push(current.trim().replace(/\r/g, ''))
  return values
}

// Helper function to parse CSV text into an array of objects
function parseCSV(csvText: string): JobOpening[] {
  const lines = csvText.trim().split(/\r?\n/)
  if (lines.length < 2) {
    return [] // Return empty if no data rows
  }

  // Use the first line as headers (e.g., 'id', 'title', 'location')
  const headers = parseCSVLine(lines[0]).map(header => header.trim())
  const jobs: JobOpening[] = []

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) {
      continue
    }

    const values = parseCSVLine(lines[i])
    if (values.length === headers.length) {
      const job: JobOpening = {} as JobOpening
      headers.forEach((header, index) => {
        job[header] = values[index]
      })

      if (!job.id) {
        job.id = String(i)
      }

      jobs.push(job)
    }
  }
  return jobs
}

export default function CareerPage() {
  const [openings, setOpenings] = useState<JobOpening[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // ⚠️ Replace with your published Google Sheet CSV URL
    const sheetURL = import.meta.env.VITE_GOOGLE_SHEET_CSV_URL || ''

    if (!sheetURL) {
      setError('Google Sheet URL not configured. Please set VITE_GOOGLE_SHEET_CSV_URL in your environment.')
      setIsLoading(false)
      return
    }

    fetch(sheetURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch job openings')
        }
        return response.text()
      })
      .then(csvText => {
        const jobData = parseCSV(csvText)
        setOpenings(jobData)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Failed to fetch or parse job openings:', error)
        setError('Unable to load job openings. Please try again later.')
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <Cursor />
      <Nav />
      <main className={styles.careerContainer}>
        <section className={styles.hero}>
          <h1>Join Our Team</h1>
          <p>Grow your career with Defence Mandate Pvt Ltd</p>
        </section>

        <section className={styles.openingsSection}>
          <div className={styles.content}>
            {isLoading && (
              <div className={styles.loading}>
                <p>Loading opportunities...</p>
              </div>
            )}

            {error && (
              <div className={styles.error}>
                <p>{error}</p>
              </div>
            )}

            {!isLoading && !error && openings.length > 0 ? (
              <div className={styles.jobList}>
                {openings.map(job => (
                  <div key={job.id} className={styles.jobCard}>
                    <div className={styles.jobHeader}>
                      <h2>{job.title}</h2>
                      <span className={styles.department}>{job.department}</span>
                    </div>
                    <div className={styles.jobMeta}>
                      <span className={styles.location}>📍 {job.location}</span>
                    </div>
                    <p className={styles.description}>{job.description}</p>
                    <a href={`mailto:defencemandate@gmail.com?subject=${encodeURIComponent(`Application for ${job.title}`)}`} className={styles.applyBtn}>
                      Apply Now
                    </a>
                  </div>
                ))}
              </div>
            ) : !isLoading && !error ? (
              <div className={styles.noOpenings}>
                <p>There are no open positions at this time. Please check back later.</p>
              </div>
            ) : null}
            <div className={styles.actions}>
              <Link to="/" className={styles.backBtn}>
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
