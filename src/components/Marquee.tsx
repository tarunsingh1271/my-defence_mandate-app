import styles from './Marquee.module.css'

const items = [
  'Executive Search', 'Specialist Roles', 'Leadership Teams',
  'Board Appointments', 'Contract Staffing', 'Talent Strategy',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        {doubled.map((item, i) => (
          <span key={i}>
            <span className={styles.item}>{item}</span>
            <span className={styles.dot}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
