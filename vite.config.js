import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: ['src/styles'],
        silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
      }
    }
  }
})
