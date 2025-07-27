import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),
  ],
  optimizeDeps: {
    include: ["@tinymce/tinymce-react"]  // ✅ This tells Vite to pre-bundle the editor
  }
})
