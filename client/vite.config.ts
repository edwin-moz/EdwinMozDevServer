import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    build: {
        outDir: "build",
    },
    plugins: [react()],
    server: {
        open: true,
        proxy: {
            "/api": {
                changeOrigin: true,
                secure: false,
                target: "https://localhost:5001",
            }
        }
    }
})
