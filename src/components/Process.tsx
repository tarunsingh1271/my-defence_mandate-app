import styles from './Process.module.css'

const steps = [
  {
    n: '1',
    title: 'Brief & Discovery',
    desc: 'We immerse ourselves in your organisation, culture, and the precise definition of success for the role.',
  },
  {
    n: '2',
    title: 'Market Mapping',
    desc: 'Comprehensive landscape analysis. We identify every relevant candidate — including those who aren\'t looking.',
  },
  {
    n: '3',
    title: 'Assessed Shortlist',
    desc: 'Structured interviews, competency assessment, and reference intelligence before any name reaches you.',
  },
  {
    n: '4',
    title: 'Placement & Beyond',
    desc: 'Offer management, onboarding support, and a 12-month check-in to ensure lasting success.',
  },
]

export default function Process() {
  return (
    <section className={styles.process} id="process">
      <div className={`${styles.header} reveal`}>
        <p className={styles.sectionLabel}>// How we work</p>
        <h2 className={styles.sectionTitle}>
          Rigorous by<br /><em>design.</em>
        </h2>
      </div>
      <div className={`${styles.steps} reveal`}>
        {steps.map(s => (
          <div key={s.n} className={styles.step}>
            <div className={styles.circle}>{s.n}</div>
            <h3 className={styles.stepTitle}>{s.title}</h3>
            <p className={styles.stepDesc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
