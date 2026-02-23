import './Experience.css'

const experiences = [
  {
    id: 1,
    role: 'Full-Stack Developer',
    company: 'Freelance',
    period: '2022 – Present',
    bullets: [
      'Built cross-platform applications using React, React Native (Expo), and ElectronJS.',
      'Designed and maintained PostgreSQL databases with Supabase.',
      'Delivered end-to-end projects from design wireframes to production deployments.',
    ],
  },
  {
    id: 2,
    role: 'Mobile App Developer',
    company: 'Personal Projects',
    period: '2021 – 2022',
    bullets: [
      'Developed and published mobile apps with React Native and Expo.',
      'Integrated third-party APIs and push notification services.',
      'Optimized app performance and reduced bundle sizes.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <div className="container">
        <h2 className="section-title" id="experience-title">Experience</h2>
        <div className="section-line" />
        <div className="exp__timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="exp__item">
              <div className="exp__dot" aria-hidden="true" />
              <div className="card exp__card">
                <div className="exp__header">
                  <div>
                    <h3 className="exp__role">{exp.role}</h3>
                    <span className="exp__company">{exp.company}</span>
                  </div>
                  <span className="exp__period">{exp.period}</span>
                </div>
                <ul className="exp__bullets">
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
