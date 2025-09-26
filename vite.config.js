import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const isVercel = process.env.VERCEL === "1";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isVercel ? "/" : "/my-portfolio/",
})
