import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'
export type Mood = 'elegante' | 'vibrante'

function read<T extends string>(key: string, fallback: T): T {
  return (document.documentElement.dataset[key] as T) || fallback
}

function save(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* almacenamiento no disponible: no pasa nada */
  }
}

/** Tema (claro/oscuro) y estilo (elegante/vibrante), sincronizados con <html>. */
export function usePrefs() {
  const [theme, setTheme] = useState<Theme>(() => read('theme', 'light'))
  const [mood, setMood] = useState<Mood>(() => read('mood', 'elegante'))

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    save('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.dataset.mood = mood
    save('mood', mood)
  }, [mood])

  return {
    theme,
    mood,
    toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    setMood,
  }
}
