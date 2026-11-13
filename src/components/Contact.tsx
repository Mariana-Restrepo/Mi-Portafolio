import { profile } from '../data/content'
import { Arrow, GitHub, LinkedIn, Mail } from './Icons'

export function Contact() {
  const { email, links, cv } = profile
  return (
    <section id="contacto" className="section contact">
      <div className="container contact__inner" data-reveal>
        <p className="eyebrow">Contacto</p>
        <h2 className="contact__title">¿Construimos algo <em>juntos</em>?</h2>
        <p className="section__lead">
          Busco oportunidades como desarrolladora frontend o diseñadora UX/UI. Si tu equipo necesita a alguien
          que hable diseño y código, escríbeme.
        </p>
        <div className="contact__actions">
          {email && (
            <a href={`mailto:${email}`} className="btn btn--primary"><Mail size={18} /> {email}</a>
          )}
          {cv && (
            <a href={cv} className="btn btn--ghost" download>Descargar hoja de vida <Arrow size={16} /></a>
          )}
        </div>
        <ul className="socials">
          <li><a href={links.github} target="_blank" rel="noreferrer"><GitHub /> GitHub</a></li>
          {links.linkedin && (
            <li><a href={links.linkedin} target="_blank" rel="noreferrer"><LinkedIn /> LinkedIn</a></li>
          )}
          {links.behance && (
            <li><a href={links.behance} target="_blank" rel="noreferrer"><Arrow /> Behance</a></li>
          )}
        </ul>
      </div>
      <footer className="footer container">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Diseñado en Figma y desarrollado con React + TypeScript</span>
      </footer>
    </section>
  )
}
