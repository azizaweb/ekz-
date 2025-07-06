import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Не нужно импортировать @tailwindcss/vite
// Tailwind настраивается через tailwind.config.js и postcss.config.js

export default defineConfig({
  plugins: [react()],
})


