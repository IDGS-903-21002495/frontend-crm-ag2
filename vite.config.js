import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),        // Plugin para compilar JSX y React
    tailwindcss(),  // Plugin para Tailwind CSS v4
  ],
})
