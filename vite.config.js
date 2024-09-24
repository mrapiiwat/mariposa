import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
  
// })

export default {
  server: {
    host: true,
    port: 3000, // หรือพอร์ตที่คุณต้องการ
  }
}