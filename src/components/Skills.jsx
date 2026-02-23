import './Skills.css'

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React (Vite)', 'HTML5', 'CSS3', 'JavaScript (ES2024)', 'Responsive Design'],
  },
  {
    category: 'Mobile',
    skills: ['React Native', 'Expo', 'EAS Build', 'Expo Router'],
  },
  {
    category: 'Desktop',
    skills: ['ElectronJS', 'Electron Forge', 'Node.js IPC'],
  },
  {
    category: 'Backend & Database',
    skills: ['Supabase', 'PostgreSQL', 'Node.js', 'REST APIs'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git & GitHub', 'GitHub Actions', 'npm / yarn', 'VS Code', 'Figma'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="container">
        <h2 className="section-title" id="skills-title">Skills</h2>
        <div className="section-line" />
        <div className="skills__grid">
          {skillGroups.map(({ category, skills }) => (
            <div key={category} className="card skills__group">
              <h3 className="skills__category">{category}</h3>
              <ul className="skills__list">
                {skills.map((skill) => (
                  <li key={skill} className="skills__tag">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
