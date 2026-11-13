import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Si publicas en el repo "Mariana-Restrepo.github.io", la base es "/".
// Si lo publicas en otro repo (ej. "portafolio"), cambia base a "/portafolio/".
export default defineConfig({
  plugins: [react()],
  base: '/',
})
