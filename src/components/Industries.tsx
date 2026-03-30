import { useState, type ReactNode } from 'react'
import styles from './Industries.module.css'

type Role = {
  label: string
  icon: ReactNode
  description: string
}

const roles: Role[] = [
  {
    label: 'Security Guards',
    icon: (
      <path
        d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3zm0 5v9"
        fill="none"
      />
    ),
    description:
      'Our security guards are trained for access control, incident response, and property surveillance. They maintain calm, visible protection and follow strict SOPs for every shift.',
  },
  {
    label: 'Housekeeping Staff',
    icon: (
      <path
        d="M6 4l8 8M12 6l6 6M5 19l7-7m0 0l3 3m-3-3l-3 3"
        fill="none"
      />
    ),
    description:
      'Our housekeeping teams deliver consistent hygiene, deep cleaning, and daily upkeep across offices and facilities. They follow checklist-driven routines to keep spaces spotless and guest-ready.',
  },
  {
    label: 'Waiters',
    icon: (
      <path
        d="M4 13h16M7 13a5 5 0 0 1 10 0m-2 3v2H9v-2"
        fill="none"
      />
    ),
    description:
      'Our waiters are skilled in service etiquette, order coordination, and guest engagement. They ensure smooth table service, fast turnaround, and a polished dining experience.',
  },
  {
    label: 'Kitchen Stewards',
    icon: (
      <path
        d="M8 4v16M12 4v8M16 4v16M12 12h4"
        fill="none"
      />
    ),
    description:
      'Our kitchen stewards support back-of-house operations through sanitation, utensil handling, and workflow support. They help maintain compliance, speed, and cleanliness during peak hours.',
  },
  {
    label: 'HR Support',
    icon: (
      <path
        d="M8 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm8 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM3.5 19a5 5 0 0 1 9 0M11.5 19a5 5 0 0 1 9 0"
        fill="none"
      />
    ),
    description:
      'Our HR support professionals handle onboarding, attendance coordination, and employee documentation with accuracy. They improve internal processes and strengthen workforce communication.',
  },
  {
    label: 'F&B Staff',
    icon: (
      <path
        d="M7 4v7a2 2 0 0 0 2 2v7M13 4h5l-2 4 2 4h-5"
        fill="none"
      />
    ),
    description:
      'Our F&B staff combine hospitality standards with operational discipline for banquets, cafes, and corporate dining. They manage preparation, service flow, and guest satisfaction end to end.',
  },
  {
    label: 'Front Desk Executives',
    icon: (
      <path
        d="M3 18h18M5 18v-6h14v6M8 12V8h8v4"
        fill="none"
      />
    ),
    description:
      'Our front desk executives create strong first impressions through professional communication and visitor handling. They manage calls, coordination, and reception tasks with reliability.',
  },
  {
    label: 'Receptionists',
    icon: (
      <path
        d="M12 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-6 14v-1a6 6 0 0 1 12 0v1"
        fill="none"
      />
    ),
    description:
      'Our receptionists handle front-office interactions, scheduling, and guest support with a warm, organized approach. They keep communication seamless while ensuring a welcoming environment.',
  },
]

export default function Industries() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className={styles.industries} id="industries">
      <div className={`${styles.header} reveal`}>
        <p className={styles.sectionLabel}>// Sectors we serve</p>
        <h2 className={styles.sectionTitle}>
          Where we<br />have <em>depth.</em>
        </h2>
      </div>
      <div className={`${styles.tags} reveal`}>
        {roles.map((role) => (
          <div key={role.label} className={styles.roleItem}>
            <button
              className={`${styles.tag} cursorTarget ${active === role.label ? styles.active : ''}`}
              onClick={() =>
                setActive((prev) => (prev === role.label ? null : role.label))
              }
            >
              <svg
                className={styles.tagIcon}
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                {role.icon}
              </svg>
              <span>{role.label}</span>
            </button>
            {active === role.label && (
              <div className={styles.inlineDetails}>
                <p className={styles.detailsText}>{role.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
