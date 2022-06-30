import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://pipe2000-techs.github.io/react-api-rick-and-morty/",
  plugins: [react()]
})
