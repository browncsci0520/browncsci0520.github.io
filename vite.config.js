// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'homogeneous-coords-handout.html'),
        demo1: resolve(__dirname, 'pages/affine-transform-demo.html'),
        demo3: resolve(__dirname, 'pages/projective-geometry-demo.html')
      }
    }
  }
})