import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <span className="footer__logo">&lt;surazy /&gt;</span>
        <p className="footer__copy">© {year} surazy. Built with React + Vite.</p>
        <div className="footer__links">
          <a href="https://github.com/surazy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
          <a href="https://x.com/surazy16" target="_blank" rel="noopener noreferrer" aria-label="X Twitter">X</a>
          <a href="mailto:surazystore@gmail.com" aria-label="Email">Email</a>
        </div>
      </div>
    </footer>
  )
}
