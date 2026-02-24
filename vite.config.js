import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: './', // ここを追加：ルート直下のファイルを静的資産として扱う
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
})
