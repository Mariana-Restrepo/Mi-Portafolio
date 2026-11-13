import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// El sitio se publica en https://mariana-restrepo.github.io/Mi-Portafolio/
// Si cambias el nombre del repo, cambia también "base".
export default defineConfig({
  plugins: [react()],
  base: '/Mi-Portafolio/',
})
