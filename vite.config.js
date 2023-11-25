import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
  root: resolve(__dirname, 'src'),
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
    }),
  ],
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        login: resolve(__dirname, 'src/pages/login.html'),
        join: resolve(__dirname, 'src/pages/join.html'),
        chats: resolve(__dirname, 'src/pages/chats.html'),
        profile: resolve(__dirname, 'src/pages/profile.html'),
        'edit-profile': resolve(__dirname, 'src/pages/edit-profile.html'),
        'change-password': resolve(__dirname, 'src/pages/change-password.html'),
        404: resolve(__dirname, 'src/pages/404.html'),
        500: resolve(__dirname, 'src/pages/500.html'),
        popup: resolve(__dirname, 'src/pages/popup.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: '/src/pages/login.html',
  },
})
