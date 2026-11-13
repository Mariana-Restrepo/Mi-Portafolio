import { projects, type Project } from '../data/content'
import { Arrow } from './Icons'

const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`

function Cover({ project }: { project: Project }) {
  const c = project.cover
  if (c.type === 'screens') {
    return (
      <div className="cover cover--screens">
        {c.logo && <img className="cover__logo" src={asset(c.logo)} alt="" />}
        <div className="phones">
          {c.images.map((src, i) => (
            <img
              key={src}
              className={`phone phone--${i}`}
              src={asset(src)}
              alt={`Pantalla ${i + 1} de ${project.title}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className={`cover cover--pattern cover--v${c.variant}`} aria-hidden="true">
      <span className="cover__label">{c.label}</span>
      {c.variant === 1 && (
        <div className="cover__devices">
          <span className="dev dev--web"><i /><i /><i /></span>
          <span className="dev dev--phone"><i /><i /></span>
        </div>
      )}
      {c.variant === 3 && (
        <div className="cover__rings">
          <span /><span /><span />
          <svg className="cover__pin" viewBox="0 0 24 24"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>
        </div>
      )}
      {c.variant === 4 && (
        <div className="cover__card">
          <span className="cover__card-chip" />
          <span className="cover__card-line" />
          <span className="cover__card-line cover__card-line--short" />
          <span className="cover__card-p">P</span>
        </div>
      )}
      {c.variant === 2 && (
        <svg className="cover__chart" viewBox="0 0 200 100" preserveAspectRatio="none">
          <path className="line-n" d="M0 100 L200 4" />
          <path className="line-log" d="M0 100 C30 62 70 52 200 44" />
        </svg>
      )}
    </div>
  )
}

export function Projects() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <header className="section__head" data-reveal>
          <p className="eyebrow">Proyectos seleccionados</p>
          <h2 className="section__title">Del problema a la <em>pantalla</em></h2>
          <p className="section__lead">
            Casos reales donde investigué, diseñé y construí. Cada uno muestra una parte distinta de cómo trabajo.
          </p>
        </header>

        <div className="projects">
          {projects.map((p) => (
            <article key={p.slug} className={`project${p.featured ? ' project--featured' : ''}`} data-reveal>
              <Cover project={p} />
              <div className="project__body">
                <p className="project__meta"><span>{p.kind}</span><span>{p.year}</span></p>
                <h3 className="project__title">{p.title}</h3>
                <p className="project__summary">{p.summary}</p>
                <p className="project__role"><strong>Mi rol:</strong> {p.role}</p>
                <ul className="project__highlights">
                  {p.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
                <ul className="tags" aria-label="Tecnologías y herramientas">
                  {p.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
                {p.links.length > 0 && (
                  <div className="project__links">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="link-arrow">
                        {l.label} <Arrow size={16} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
