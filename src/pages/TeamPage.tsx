import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Cursor from '../components/Cursor'
import styles from './TeamPage.module.css'

const teamMembers = [
  {
    name: 'Dharmender Singh',
    role: 'Director & Search Lead',
    photo: '/f1.png',
    responsibilities:
      'Directs executive search mandates, aligning talent acquisition strategies with overarching business objectives and leading final candidate calibration with client leadership.',
  },
  {
    name: 'Udit Shrivastava',
    role: 'Director & Head of Talent Acquisition',
    photo: '/f3.png',
    responsibilities:
      'Architects overarching talent acquisition strategies, overseeing comprehensive market mapping and designing scalable, end-to-end recruitment frameworks to drive company growth.',
  },
  {
    name: 'Varun Singh',
    role: 'HR & Operations Manager',
    photo: '/f2.png',
    responsibilities:
      'Drives operational excellence across all engagements, establishing robust reporting frameworks to guarantee structured, outcome-focused delivery for executive stakeholders.',
  },
]

export default function TeamPage() {
  return (
    <>
      <Cursor />
      <Nav />
      <main className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Our Team</p>
          <h1>People Behind Defence Mandate</h1>
          <p>
            Our team combines market intelligence, recruitment expertise, and a high-touch delivery
            approach to close critical roles with confidence and speed.
          </p>
          <div className={styles.actions}>
            <Link to="/#contact" className={styles.primaryAction}>
              Start A Conversation
            </Link>
            <Link to="/" className={styles.secondaryAction}>
              Back to Home
            </Link>
          </div>
        </section>

        <section className={styles.grid}>
          {teamMembers.map(member => (
            <article key={member.name} className={styles.memberCard}>
              <div className={styles.imageWrap}>
                <img className={styles.memberImage} src={member.photo} alt={`${member.name} profile`} />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.role}>{member.role}</p>
                <h2>{member.name}</h2>
                <p className={styles.responsibilities}>{member.responsibilities}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
