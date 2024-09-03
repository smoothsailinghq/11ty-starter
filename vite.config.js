import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  hmr: {
    protocol: 'ws',
    host: 'localhost',
    port: 4200, // make sure this does not conflict with other services
  },
  css: {
    devSourcemap: true
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: false,
    sourcemap: 'hidden',
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/assets/js/main.js'),
      },
      output: {
        assetFileNames: 'assets/css/[name].[hash].css',
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js'
      }
    }
  },
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets')
    }
  }
})