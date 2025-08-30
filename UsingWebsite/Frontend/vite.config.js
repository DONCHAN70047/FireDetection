import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: process.env.PORT || 5173,

    // ✅ Use a proxy during development if your backend is remote:
    proxy: {
      '/api': {
        target: 'https://agri-smart-upolabdhi-backend-8.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    host: true,
    port: process.env.PORT || 4173
  }
})
