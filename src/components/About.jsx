import './About.css'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="container">
        <h2 className="section-title" id="about-title">About Me</h2>
        <div className="section-line" />
        <div className="about__grid">
          <div className="about__avatar-wrap">
            <img
              src="https://github.com/surazy.png"
              alt="surazy's GitHub avatar"
              className="about__avatar"
              width="240"
              height="240"
              loading="lazy"
            />
          </div>
          <div className="about__text">
            <p>
              Hi, I&apos;m <strong>surazy</strong> — a passionate full-stack developer who loves turning ideas
              into polished products. I build for the web, mobile, and desktop, always chasing clean
              code and delightful user experiences.
            </p>
            <p>
              My main stack revolves around <strong>React</strong> for web, <strong>React Native (Expo)</strong> for
              mobile, <strong>ElectronJS</strong> for desktop, and <strong>Supabase</strong> as my go-to backend.
              I enjoy the entire product lifecycle — from concept to deployment.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new tools, contributing to open source,
              or tweaking my dev setup for that perfect workflow.
            </p>
            <div className="about__links">
              <a href="https://github.com/surazy" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                GitHub Profile
              </a>
              <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
