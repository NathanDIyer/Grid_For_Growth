import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Grid_For_Growth/',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
