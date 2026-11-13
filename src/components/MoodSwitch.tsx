import type { Mood } from '../hooks/usePrefs'

type Props = { mood: Mood; onChange: (m: Mood) => void; compact?: boolean }

const moods: Mood[] = ['elegante', 'vibrante']

export function MoodSwitch({ mood, onChange, compact }: Props) {
  return (
    <div className={`mood-switch${compact ? ' mood-switch--compact' : ''}`} role="radiogroup" aria-label="Estilo visual">
      {moods.map((m) => (
        <button
          key={m}
          role="radio"
          aria-checked={mood === m}
          className={mood === m ? 'is-active' : ''}
          onClick={() => onChange(m)}
        >
          <span className={`mood-dot mood-dot--${m}`} aria-hidden="true" />
          <span className="mood-switch__label">{m === 'elegante' ? 'Elegante' : 'Vibrante'}</span>
        </button>
      ))}
    </div>
  )
}
