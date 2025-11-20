import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages config
export default defineConfig({
  plugins: [react()],
  base: '/FamilyTreeApp/',  // <-- must match your repo name exactly
})
