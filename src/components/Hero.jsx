import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="container hero__inner">
        <div className="hero__badge">👋 Hey there, I&apos;m</div>
        <h1 className="hero__name">surazy</h1>
        <p className="hero__tagline">
          Full-stack developer crafting fast, beautiful experiences for{' '}
          <span className="hero__highlight">web</span>,{' '}
          <span className="hero__highlight">mobile</span>, and{' '}
          <span className="hero__highlight">desktop</span>.
        </p>
        <p className="hero__sub">
          Building with React · React Native · ElectronJS · Supabase
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>
        <div className="hero__scroll" aria-hidden="true">
          <span className="hero__scroll-dot" />
        </div>
      </div>
    </section>
  )
}
