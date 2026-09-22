import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// BiotaElite 2.0 - MASTER-FIX-14
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2021,
    host: true,
    strictPort: true,
    watch: {
      ignored: ['**/.tmp*/**', '**/*.tmp', '**/scripts/**'],
    },
  },
})
