import { profile, skills } from '../data/content'
import { Code, Pen, Spark } from './Icons'

const icons = { pen: Pen, code: Code, spark: Spark } as const

export function About() {
  return (
    <section id="sobre-mi" className="section section--alt">
      <div className="container about">
        <div className="about__text" data-reveal>
          <p className="eyebrow">Sobre mí</p>
          <h2 className="section__title">
            Diseñadora que <em>programa</em>, desarrolladora que <em>diseña</em>
          </h2>
          {profile.about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="skills">
          {skills.map((s) => {
            const Icon = icons[s.icon as keyof typeof icons]
            return (
              <div key={s.title} className="skill" data-reveal>
                <span className="skill__icon"><Icon size={22} /></span>
                <h3>{s.title}</h3>
                <ul className="tags">
                  {s.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
