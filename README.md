# Portafolio · Mariana Restrepo

Portafolio personal de **Mariana Restrepo Barrientos**, desarrolladora frontend y diseñadora UX/UI en Medellín.

**Sitio en vivo:** https://mariana-restrepo.github.io

## La idea

Quería un portafolio que demostrara, no solo contara, que puedo diseñar para marcas muy distintas. Por eso el sitio tiene **dos ejes de estilo** que se combinan:

| | Elegante | Vibrante |
|---|---|---|
| Tipografía display | Fraunces (serif) | Bricolage Grotesque |
| Esquinas | Rectas, discretas | Redondeadas, tipo píldora |
| Color | Neutros cálidos + bronce | Rosa, violeta, amarillo, verde |
| Fondo del hero | Retícula fina | Manchas de color animadas |

Cada estilo funciona en **modo claro y oscuro**, así que son 4 combinaciones generadas con el mismo sistema de *design tokens* (variables CSS en `src/styles.css`).

## Tecnología

- React 19 + TypeScript + Vite
- CSS puro con design tokens (sin librerías de UI)
- Accesibilidad: HTML semántico, navegación con teclado, `prefers-reduced-motion`, enlace para saltar al contenido
- Despliegue automático en GitHub Pages con GitHub Actions

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

## Cómo actualizar el contenido

Todos los textos, proyectos y enlaces están en **`src/data/content.ts`**. Para agregar un proyecto, copia uno de la lista `projects` y cambia sus datos. Las imágenes van en `public/proyectos/`.

## Estructura

```
src/
├── data/content.ts      # contenido editable
├── hooks/               # tema, estilo y animaciones de entrada
├── components/          # Header, Hero, Projects, About, Process, Contact
└── styles.css           # design tokens + estilos
```
