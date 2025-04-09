// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'git@github.com:harshachaitanya27/my-portfolio.git',
  plugins: [react()],
})
