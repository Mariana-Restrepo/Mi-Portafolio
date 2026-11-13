// ───────────────────────────────────────────────────────────────
//  Todo el contenido del portafolio vive aquí.
//  Para actualizar textos, proyectos o enlaces, edita solo este archivo.
// ───────────────────────────────────────────────────────────────

export const profile = {
  name: 'Mariana Restrepo Barrientos',
  firstName: 'Mariana',
  lastName: 'Restrepo',
  role: 'Diseñadora UX/UI & Desarrolladora Frontend',
  location: 'Medellín, Colombia',
  availability: 'Disponible desde enero de 2027', // deja '' para ocultar el indicador
  tagline:
    'Diseño interfaces que se sienten bien y las construyo para que funcionen igual de bien.',
  intro:
    'Diseño en Figma e implemento en React y TypeScript, con foco en sistemas de diseño y accesibilidad WCAG.',
  about: [
    'Soy Mariana, diseñadora UX/UI y desarrolladora frontend de Medellín. Estudio Tecnología en Desarrollo de Software en la Universidad Católica Luis Amigó y en abril de 2027 empiezo el Máster en Diseño Web y Apps (UX/UI) de ESDESIGN y la Universidad Internacional de Valencia.',
    'Actualmente hago mis prácticas como Desarrolladora Frontend en Crystal S.A.S. En mis proyectos propios diseño y construyo de punta a punta: desde la investigación y el prototipo en Figma hasta componentes en React y TypeScript.',
    'Me importa que lo que diseño funcione para todas las personas: trabajo con WCAG 2.2 AA, navegación por teclado y lector de pantalla. Me adapto al tono de cada marca, sea sobria y corporativa o creativa y llena de color, y uso IA como Claude para acelerar mi flujo sin perder criterio propio.',
  ],
  email: 'marianarestrepobarrientos@gmail.com',
  links: {
    github: 'https://github.com/Mariana-Restrepo',
    linkedin: 'https://www.linkedin.com/in/mariana-restrepo-barrientos-176077324/',
    behance: '', // opcional: Behance o Dribbble
  },
  cv: '', // pon aquí el nombre del PDF dentro de /public (sin datos de proyectos de la empresa)
}

/** Cifras destacadas que se muestran bajo el inicio. */
export const stats = [
  { value: '39', label: 'pantallas prototipadas en Gestor Ventures' },
  { value: '50', label: 'combinaciones de color verificadas con WCAG AA' },
  { value: '10 M', label: 'registros procesados en el navegador (GestorClientes)' },
  { value: '100', label: 'en accesibilidad en Lighthouse (Soy Mariana)' },
]

export const experience = [
  {
    role: 'Desarrolladora Frontend (prácticas)',
    company: 'Crystal S.A.S.',
    place: 'Medellín',
    period: 'Ene. 2026 – ene. 2027',
    // Por decisión propia no se describen proyectos ni cifras de la empresa.
    points: [] as string[],
  },
]

export const education = [
  { title: 'Máster en Diseño Web y Apps (UX/UI)', place: 'ESDESIGN · Universidad Internacional de Valencia (online)', period: 'Desde abr. 2027' },
  { title: 'Tecnología en Desarrollo de Software', place: 'Universidad Católica Luis Amigó', period: '2023 – feb. 2027' },
]

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
    kind: 'App móvil · UX/UI · En equipo',
    year: '2026',
    summary:
      'App de gestión para emprendedores que centraliza ventas, gastos, agenda, clientes y caja, con un asistente de IA que responde con los datos del propio negocio.',
    role: 'Diseño de la experiencia completa, sistema visual y prototipo. Trabajo en equipo con Miguel Ángel Blandón (desarrollo), en Diseño Móvil II.',
    highlights: [
      'Prototipo de 39 pantallas que cubre las 39 historias de usuario',
      'Sistema visual con modo claro y oscuro, e identidad de marca',
      '50 combinaciones de color verificadas con contraste WCAG AA',
      'Presentado en la Muestra de Proyectos Tecnológicos 2026',
    ],
    tags: ['UX Research', 'Figma', 'Prototipado', 'Design System', 'WCAG', 'Android'],
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
    kind: 'Web + App móvil · Diseño y frontend',
    year: '2026',
    summary:
      'Web instalable como PWA y app móvil de marca personal que comparten contenido, sistema de diseño y lógica en un monorepo.',
    role: 'Concepto, sistema de diseño y desarrollo con React y TypeScript a partir de especificaciones para IA, revisando y depurando el código generado.',
    highlights: [
      '100/100 en accesibilidad en Lighthouse',
      'Un solo sistema de diseño para web y móvil',
      'Sin datos fijos en el código: contenido en JSON con esquemas',
    ],
    tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind v4', 'Expo', 'Accesibilidad'],
    links: [{ label: 'Ver código', href: 'https://github.com/Mariana-Restrepo/SoyMariana' }],
    cover: { type: 'pattern', label: 'Soy Mariana', variant: 1 },
  },
  {
    slug: 'mapau',
    title: 'MapaU',
    kind: 'Guía inclusiva · UX Research',
    year: '2025 – hoy',
    summary:
      'Guía inclusiva del campus de la Universidad Católica Luis Amigó, pensada para que cualquier persona pueda orientarse, incluidas personas con discapacidad visual.',
    role: 'Proyecto individual: investigación con estudiantes, docentes y personal, y diseño del sistema de orientación.',
    highlights: [
      'Investigación de cómo se orientan las personas en el campus',
      'Sistema de orientación por voz y audio',
      'Accesible para personas con discapacidad visual',
    ],
    tags: ['Investigación', 'Accesibilidad', 'Diseño inclusivo', 'Voz y audio'],
    links: [],
    cover: { type: 'pattern', label: 'MapaU', variant: 3 },
  },
  {
    slug: 'parking-amigo',
    title: 'Parking Amigó',
    kind: 'App móvil · UX/UI · En equipo',
    year: '2024 – hoy',
    summary:
      'App del parqueadero universitario para recargar el carné y controlar el acceso de vehículos.',
    role: 'Diseño de la app en Figma con Material Design y participación en el desarrollo en Android Studio.',
    highlights: ['Recarga del carné desde el celular', 'Control de acceso al parqueadero', 'Basada en Material Design'],
    tags: ['Figma', 'Material Design', 'Android Studio'],
    links: [],
    cover: { type: 'pattern', label: 'Parking Amigó', variant: 4 },
  },
  {
    slug: 'gestor-clientes',
    title: 'GestorClientes',
    kind: 'Web app · Visualización',
    year: '2026',
    summary:
      'Compara en vivo la búsqueda secuencial O(n) con la binaria O(log n), midiendo pasos y tiempo real con bases de hasta 10 millones de registros.',
    role: 'Diseño y desarrollo. Proyecto de Cálculo Diferencial: límites aplicados al rendimiento de algoritmos.',
    highlights: [
      'Comparación visual de algoritmos en tiempo real',
      'Hasta 10.000.000 de registros en el navegador',
      'Cero instalación: un solo archivo',
    ],
    tags: ['JavaScript', 'HTML', 'CSS', 'Algoritmos'],
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
    items: ['Figma', 'Sistemas de diseño', 'Prototipos navegables', 'Material Design', 'Interfaces web y móviles', 'Historias de usuario', 'Pruebas de usabilidad'],
  },
  {
    title: 'Desarrollo Frontend',
    icon: 'code',
    items: ['React', 'TypeScript', 'HTML semántico', 'CSS', 'Diseño responsive', 'Vite', 'React Native · Expo'],
  },
  {
    title: 'Accesibilidad',
    icon: 'eye',
    items: ['WCAG 2.2 AA', 'Contraste de color', 'Lighthouse', 'Navegación por teclado', 'Lector de pantalla'],
  },
  {
    title: 'Forma de trabajo',
    icon: 'spark',
    items: ['Scrum', 'Desarrollo asistido por IA', 'Puente entre diseño y desarrollo', 'Git y GitHub'],
  },
]

export const workflow = [
  { n: '01', title: 'Entender', text: 'Entrevistas, historias de usuario y flujos para definir qué necesita la gente de verdad.' },
  { n: '02', title: 'Diseñar', text: 'Interfaces en Figma con identidad, consistentes con un sistema de diseño y accesibles.' },
  { n: '03', title: 'Prototipar', text: 'Prototipos navegables para probar ideas con usuarios antes de escribir código.' },
  { n: '04', title: 'Construir', text: 'Componentes en React y TypeScript, responsivos y fieles al diseño, verificados con Lighthouse.' },
]
