import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // 標準に戻す
  build: {
    outDir: 'dist', // 出力先を明示
  },
})
