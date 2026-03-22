import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Cursor from '../components/Cursor'
import logoImage from '../assets/logo.jpg'
import styles from './TeamPage.module.css'

const teamMembers = [
  {
    name: 'Dharmender Singh',
    role: 'Founder & Search Lead',
    photo: '/heroBanner1.png',
    responsibilities:
      'Leads executive mandates, aligns hiring strategy with business goals, and oversees final candidate calibration with client leadership.',
  },
  {
    name: 'Udit Shrivastava',
    role: 'Senior Talent Consultant',
    photo: '/favicon.jpg',
    responsibilities:
      'Owns market mapping, drives candidate outreach, and manages end-to-end interview coordination for specialist and mid-senior roles.',
  },
  {
    name: 'Varun Singh',
    role: 'Human resources & Operations Manager',
    photo: logoImage,
    responsibilities:
      'Maintains client communication, tracks weekly progress, and ensures hiring timelines remain structured, visible, and outcome-focused.',
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
