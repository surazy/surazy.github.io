import './Contact.css'

const contactItems = [
  {
    label: 'Email',
    href: 'mailto:surazystore@gmail.com',
    display: 'surazystore@gmail.com',
    icon: '✉️',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/surazy',
    display: 'github.com/surazy',
    icon: '🐙',
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/surazy16',
    display: '@surazy16',
    icon: '𝕏',
  },
  {
    label: 'Website',
    href: 'https://surazy.me',
    display: 'surazy.me',
    icon: '🌐',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="container">
        <h2 className="section-title" id="contact-title">Get In Touch</h2>
        <div className="section-line" />
        <p className="contact__intro">
          I&apos;m open to freelance projects, collaborations, and full-time opportunities.
          Feel free to reach out through any of the channels below!
        </p>
        <div className="contact__grid">
          {contactItems.map(({ label, href, display, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="card contact__item"
              aria-label={`Contact via ${label}`}
            >
              <span className="contact__icon" aria-hidden="true">{icon}</span>
              <div>
                <div className="contact__label">{label}</div>
                <div className="contact__display">{display}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="contact__resume">
          <p>Want a quick overview?</p>
          <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
