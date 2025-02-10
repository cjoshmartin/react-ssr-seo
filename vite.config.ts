import { defineConfig } from 'vite'
import { reactRouter } from "@react-router/dev/vite";
import netlifyPlugin from '@netlify/vite-plugin-react-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRouter(),
    netlifyPlugin()
  ]
})