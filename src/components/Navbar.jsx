import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__logo" onClick={closeMenu}>
          &lt;surazy /&gt;
        </a>
        <button
          className={`navbar__burger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`} role="navigation">
          <ul className="navbar__list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="navbar__link" onClick={closeMenu}>{label}</a>
              </li>
            ))}
            <li>
              <a href="./resume.pdf" className="btn btn-outline navbar__resume" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
