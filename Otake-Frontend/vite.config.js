import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const port = Number(env.VITE_DEV_PORT) || 5174

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0', // Expose to LAN so mobile devices on Wi-Fi can connect
      port,
      headers: {
        'Cache-Control': 'no-store',
      },
    },
    preview: {
      host: '0.0.0.0',
      port,
    },
  }
})
