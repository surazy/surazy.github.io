import githubData from '../data/github.json'
import './Projects.css'

function LanguageBadge({ language }) {
  if (!language) return null
  return <span className="project__lang">{language}</span>
}

function ProjectCard({ repo }) {
  return (
    <article className="card project__card">
      <div className="project__header">
        <svg className="project__icon" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor">
          <path d="M2 2.5A2.5 2.5 0 014.5 0h7A2.5 2.5 0 0114 2.5v11a.75.75 0 01-1.144.634L8 11.093l-4.856 3.04A.75.75 0 012 13.5V2.5z"/>
        </svg>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project__name">
          {repo.name}
        </a>
      </div>
      <p className="project__desc">
        {repo.description || 'No description provided.'}
      </p>
      <div className="project__footer">
        <LanguageBadge language={repo.language} />
        {repo.stargazers_count > 0 && (
          <span className="project__stars">
            ⭐ {repo.stargazers_count}
          </span>
        )}
        {repo.topics && repo.topics.slice(0, 3).map((topic) => (
          <span key={topic} className="project__topic">{topic}</span>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  const repos = githubData.repos || []

  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="container">
        <h2 className="section-title" id="projects-title">Projects</h2>
        <div className="section-line" />
        {repos.length === 0 ? (
          <div className="projects__empty">
            <p className="projects__empty-icon">🚀</p>
            <p>Check back soon — projects are on the way!</p>
            <a href="https://github.com/surazy" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{marginTop: '1rem'}}>
              View GitHub Profile
            </a>
          </div>
        ) : (
          <div className="projects__grid">
            {repos.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
