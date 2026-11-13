// ───────────────────────────────────────────────────────────────
//  Todo el contenido del portafolio vive aquí.
//  Para actualizar textos, proyectos o enlaces, edita solo este archivo.
// ───────────────────────────────────────────────────────────────

export const profile = {
  name: 'Mariana Restrepo Barrientos',
  firstName: 'Mariana',
  lastName: 'Restrepo',
  role: 'Desarrolladora Frontend & Diseñadora UX/UI',
  location: 'Medellín, Colombia',
  available: true, // muestra el indicador "Disponible para nuevos proyectos"
  tagline:
    'Diseño interfaces que se sienten bien y las construyo para que funcionen igual de bien.',
  intro:
    'Uno el diseño de producto y el desarrollo frontend: investigo, prototipo en Figma y llevo cada pantalla a código con React y TypeScript, cuidando el detalle de punta a punta.',
  about: [
    'Soy Mariana, diseñadora UX/UI y desarrolladora frontend de Medellín. Me formo en la Universidad Católica Luis Amigó y me apasiona el punto exacto donde una buena idea de diseño se convierte en un producto real.',
    'Disfruto entender a las personas antes de dibujar una sola pantalla: qué necesitan, qué les frustra y cómo hacerles la vida más fácil. Después lo llevo a Figma, lo pruebo y lo construyo con componentes limpios, accesibles y reutilizables.',
    'Me adapto al tono de cada marca: puedo trabajar en productos sobrios y corporativos tanto como en proyectos creativos, llenos de color y personalidad. Uso herramientas de IA como Claude para acelerar mi flujo sin perder criterio propio.',
  ],
  // Datos de contacto
  email: 'marianarestrepobarrientos@gmail.com',
  links: {
    github: 'https://github.com/Mariana-Restrepo',
    linkedin: 'https://www.linkedin.com/in/mariana-restrepo-barrientos-176077324/',
    behance: '', // opcional: Behance o Dribbble
  },
  cv: '', // ej. '/cv-mariana-restrepo.pdf' (pon el PDF dentro de /public)
}

export type Project = {
  slug: string
  title: string
  kind: string
  year: string
  summary: string
  role: string
  highlights: string[]
  tags: string[]
  links: { label: string; href: string }[]
  cover: { type: 'screens'; images: string[]; logo?: string } | { type: 'pattern'; label: string; variant: number }
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'gestor-ventures',
    title: 'Gestor Ventures',
    kind: 'App móvil · UX/UI',
    year: '2026',
    summary:
      'App Android de gestión para emprendedores: ventas, gastos, caja, agenda, clientes y un asistente de IA que responde con los datos del propio negocio.',
    role: 'Diseño UX/UI: investigación, arquitectura de información, identidad visual, flujos y prototipo navegable. Trabajo en equipo con Miguel Ángel Blandón (desarrollo).',
    highlights: [
      'Identidad de marca y logo desde cero',
      'Prototipo navegable con 6 fases y recorrido completo',
      'Dos roles (Líder y Vendedor) con navegación adaptada',
      'Presentado en la Muestra de Proyectos Tecnológicos 2026',
    ],
    tags: ['UX Research', 'Figma', 'Prototipado', 'Design System', 'Android'],
    links: [
      { label: 'Ver prototipo', href: 'https://mariana-restrepo.github.io/Diseno-Movil-II/' },
      { label: 'Repo de diseño', href: 'https://github.com/Mariana-Restrepo/Diseno-Movil-II' },
      { label: 'Repo de la app', href: 'https://github.com/Sudo-CrocPenguin/gestor-ventures' },
    ],
    cover: {
      type: 'screens',
      images: ['proyectos/gv-agenda.png', 'proyectos/gv-inicio.png', 'proyectos/gv-asistente.png'],
      logo: 'proyectos/gestor-ventures-logo.svg',
    },
    featured: true,
  },
  {
    slug: 'soy-mariana',
    title: 'Soy Mariana',
    kind: 'Web + App móvil · Frontend',
    year: '2026',
    summary:
      'Experiencia digital para una creadora de contenido: una web instalable como PWA y una app móvil que comparten contenido, sistema de diseño y lógica en un monorepo.',
    role: 'Diseño y desarrollo completo: arquitectura del monorepo, tokens de diseño compartidos, web y app.',
    highlights: [
      'Monorepo con npm workspaces (tokens · content · core)',
      'Un solo sistema de diseño para web y móvil',
      'Animaciones con Motion y soporte PWA',
    ],
    tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind v4', 'Expo', 'React Native'],
    links: [{ label: 'Ver código', href: 'https://github.com/Mariana-Restrepo/SoyMariana' }],
    cover: { type: 'pattern', label: 'Soy Mariana', variant: 1 },
  },
  {
    slug: 'gestor-clientes',
    title: 'GestorClientes',
    kind: 'Web app · Visualización',
    year: '2026',
    summary:
      'Gestión de clientes que compara en vivo la búsqueda secuencial O(n) con la binaria O(log n), midiendo pasos y tiempo real con bases de hasta 10 millones de registros.',
    role: 'Diseño y desarrollo. Proyecto de Cálculo Diferencial: límites aplicados al rendimiento de algoritmos.',
    highlights: [
      'Comparación visual de algoritmos en tiempo real',
      'Hasta 10.000.000 de registros en el navegador',
      'Cero instalación: un solo archivo, listo para usar',
    ],
    tags: ['JavaScript', 'HTML', 'CSS', 'Algoritmos', 'Data viz'],
    links: [
      { label: 'Ver demo', href: 'https://mariana-restrepo.github.io/Aplicativo_busqueda/' },
      { label: 'Ver código', href: 'https://github.com/Mariana-Restrepo/Aplicativo_busqueda' },
    ],
    cover: { type: 'pattern', label: 'O(log n)', variant: 2 },
  },
]

export const skills = [
  {
    title: 'Diseño UX/UI',
    icon: 'pen',
    items: ['Figma', 'Investigación de usuarios', 'Arquitectura de información', 'Wireframes y prototipos', 'Sistemas de diseño', 'Accesibilidad'],
  },
  {
    title: 'Desarrollo Frontend',
    icon: 'code',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML semántico', 'CSS / Tailwind', 'Vite', 'React Native · Expo'],
  },
  {
    title: 'Flujo de trabajo',
    icon: 'spark',
    items: ['Git y GitHub', 'IA aplicada (Claude)', 'Metodologías ágiles', 'Trabajo en equipo', 'Documentación'],
  },
]

export const workflow = [
  { n: '01', title: 'Entender', text: 'Hablo con las personas, investigo el problema y defino qué significa “éxito”.' },
  { n: '02', title: 'Diseñar', text: 'Flujos, wireframes y una interfaz con identidad, consistente con un sistema de diseño.' },
  { n: '03', title: 'Prototipar', text: 'Prototipos navegables para probar ideas rápido, antes de escribir código.' },
  { n: '04', title: 'Construir', text: 'Componentes en React y TypeScript, accesibles, responsivos y fieles al diseño.' },
]
