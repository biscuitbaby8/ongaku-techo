import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // publicDirの設定を消すか、'public' に戻す
  publicDir: 'public', 
  build: {
    outDir: 'dist',
  },
})
