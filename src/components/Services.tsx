import styles from './Services.module.css'

const services = [
  {
    num: '01',
    name: 'Executive Search',
    desc: 'C-suite and director-level appointments across private, public, and PE-backed organisations. Confidential, precise, unhurried.',
  },
  {
    num: '02',
    name: 'Specialist Recruitment',
    desc: 'Deep domain expertise in technology, finance, engineering, and life sciences. We know the talent pools others don\'t.',
  },
  {
    num: '03',
    name: 'Interim & Contract',
    desc: 'Rapid deployment of vetted interim leaders to bridge gaps, drive change, or manage critical transitions.',
  },
  {
    num: '04',
    name: 'Talent Advisory',
    desc: 'Strategic workforce planning, succession frameworks, and talent market intelligence for forward-thinking organisations.',
  },
]

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={`${styles.left} reveal`}>
        <p className={styles.sectionLabel}>// What we do</p>
        <h2 className={styles.sectionTitle}>
          Built for<br /><em>precision</em>,<br />not volume.
        </h2>
        <p className={styles.desc}>
          Every engagement is treated as a bespoke search. We work with a select number of clients to ensure depth, not breadth.
        </p>
      </div>

      <div className={`${styles.grid} reveal`}>
        {services.map(s => (
          <div key={s.num} className={`${styles.item} cursorTarget`}>
            <span className={styles.num}>{s.num}</span>
            <div>
              <h3 className={styles.name}>{s.name}</h3>
              <p className={styles.serviceDesc}>{s.desc}</p>
            </div>
            <span className={styles.arrow}>↗</span>
          </div>
        ))}
      </div>
    </section>
  )
}
