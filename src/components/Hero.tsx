import { profile } from '../data/content'
import type { Mood } from '../hooks/usePrefs'
import { MoodSwitch } from './MoodSwitch'

type Props = { mood: Mood; onMood: (m: Mood) => void }

export function Hero({ mood, onMood }: Props) {
  const elegant = mood === 'elegante'
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="blob blob--1" />
        <span className="blob blob--2" />
        <span className="blob blob--3" />
      </div>
      <div className="container hero__grid">
        <div className="hero__copy">
          {profile.available && (
            <p className="status">
              <span className="status__dot" /> Disponible para nuevos proyectos · {profile.location}
            </p>
          )}
          <h1 className="hero__title">
            <span>{profile.firstName}</span>
            <span className="hero__title-accent">{profile.lastName}</span>
          </h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__ctas">
            <a href="#proyectos" className="btn btn--primary">Ver proyectos</a>
            <a href="#contacto" className="btn btn--ghost">Hablemos</a>
          </div>
        </div>

        <aside className="showcase" aria-label="Muestra de estilo visual">
          <div className="showcase__card">
            <div className="showcase__head">
              <span>Sistema visual</span>
              <span className="showcase__chip">{elegant ? 'Elegante' : 'Vibrante'}</span>
            </div>
            <div className="showcase__type">
              <span className="showcase__aa">Aa</span>
              <div>
                <strong>{elegant ? 'Fraunces' : 'Bricolage Grotesque'}</strong>
                <small>Plus Jakarta Sans</small>
              </div>
            </div>
            <div className="showcase__swatches" aria-hidden="true">
              <span style={{ background: 'var(--c1)' }} />
              <span style={{ background: 'var(--c2)' }} />
              <span style={{ background: 'var(--c3)' }} />
              <span style={{ background: 'var(--c4)' }} />
              <span style={{ background: 'var(--text)' }} />
            </div>
            <div className="showcase__ui" aria-hidden="true">
              <span className="fake-btn">Comenzar</span>
              <span className="fake-toggle"><i /></span>
              <span className="fake-bar"><i /></span>
            </div>
          </div>
          <div className="showcase__switch">
            <p>Pruébalo: así me adapto al tono de cada marca</p>
            <MoodSwitch mood={mood} onChange={onMood} />
          </div>
        </aside>
      </div>
    </section>
  )
}
