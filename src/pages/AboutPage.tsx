import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Cursor from '../components/Cursor'
import styles from './AboutPage.module.css'

export default function AboutPage() {
  return (
    <>
      <Cursor />
      <Nav />
      <main className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>About Defence Mandate Pvt Ltd</p>
          <h1>Built for Precision Hiring in High-Impact Roles</h1>
          <p>
            Defence Mandate partners with ambitious organizations to find leadership and specialist
            talent where quality, confidentiality, and speed all matter.
          </p>
          <div className={styles.actions}>
            <Link to="/#contact" className={styles.primaryAction}>
              Discuss Your Hiring Mandate
            </Link>
            <Link to="/" className={styles.secondaryAction}>
              Back to Home
            </Link>
          </div>
        </section>

        <section className={styles.grid}>
          <article>
            <h2>What We Do</h2>
            <p>
              We run focused search mandates across executive and specialist functions, combining
              market mapping, deep screening, and structured stakeholder alignment.
            </p>
          </article>
          <article>
            <h2>How We Work</h2>
            <p>
              Every engagement is operated with a clear process, weekly visibility, and candidate
              calibration loops that reduce hiring risk.
            </p>
          </article>
          <article>
            <h2>Who We Support</h2>
            <p>
              We support growing companies and established institutions that need trusted hiring
              support for business-critical positions.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  )
}
