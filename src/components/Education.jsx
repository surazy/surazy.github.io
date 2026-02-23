import './Education.css'

const education = [
  {
    id: 1,
    degree: 'Bachelor of Computer Science',
    institution: 'University Placeholder',
    period: '2019 – 2023',
    notes: 'Focused on software engineering, algorithms, and systems programming.',
  },
  {
    id: 2,
    degree: 'Self-Directed Learning',
    institution: 'Online Courses & Open Source',
    period: '2020 – Present',
    notes: 'Continuously learning through freeCodeCamp, The Odin Project, and building real projects.',
  },
]

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title">
      <div className="container">
        <h2 className="section-title" id="education-title">Education</h2>
        <div className="section-line" />
        <div className="edu__grid">
          {education.map((edu) => (
            <div key={edu.id} className="card edu__card">
              <div className="edu__header">
                <div>
                  <h3 className="edu__degree">{edu.degree}</h3>
                  <span className="edu__institution">{edu.institution}</span>
                </div>
                <span className="edu__period">{edu.period}</span>
              </div>
              {edu.notes && <p className="edu__notes">{edu.notes}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
