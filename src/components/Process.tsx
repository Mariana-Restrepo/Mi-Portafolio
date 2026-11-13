import { workflow } from '../data/content'

export function Process() {
  return (
    <section id="proceso" className="section">
      <div className="container">
        <header className="section__head" data-reveal>
          <p className="eyebrow">Cómo trabajo</p>
          <h2 className="section__title">Un proceso, de la idea al <em>código</em></h2>
        </header>
        <ol className="process">
          {workflow.map((s) => (
            <li key={s.n} className="step" data-reveal>
              <span className="step__n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
