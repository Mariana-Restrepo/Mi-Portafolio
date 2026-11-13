import { profile } from '../data/content'
import type { Mood, Theme } from '../hooks/usePrefs'
import { Moon, Sun } from './Icons'
import { MoodSwitch } from './MoodSwitch'

type Props = { theme: Theme; mood: Mood; onTheme: () => void; onMood: (m: Mood) => void }

export function Header({ theme, mood, onTheme, onMood }: Props) {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#inicio" className="logo" aria-label="Ir al inicio">
          <span className="logo__mark">MR</span>
          <span className="logo__text">{profile.firstName} {profile.lastName}</span>
        </a>
        <nav className="nav" aria-label="Principal">
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proceso">Proceso</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="header__actions">
          <MoodSwitch mood={mood} onChange={onMood} compact />
          <button
            className="icon-btn"
            onClick={onTheme}
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </header>
  )
}
