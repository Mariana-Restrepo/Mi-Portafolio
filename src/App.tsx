import { About } from './components/About'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { usePrefs } from './hooks/usePrefs'
import { useReveal } from './hooks/useReveal'

export default function App() {
  const { theme, mood, toggleTheme, setMood } = usePrefs()
  useReveal()

  return (
    <>
      <a href="#proyectos" className="skip-link">Saltar al contenido</a>
      <Header theme={theme} mood={mood} onTheme={toggleTheme} onMood={setMood} />
      <main>
        <Hero mood={mood} onMood={setMood} />
        <Projects />
        <About />
        <Process />
        <Contact />
      </main>
    </>
  )
}
