import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Keep React and React-DOM together in one chunk
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
              return 'react-vendor';
            }
            // Three.js in its own chunk
            if (id.includes('three')) {
              return 'three';
            }
            // React Three Fiber and Drei together
            if (id.includes('@react-three')) {
              return 'react-three';
            }
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false
  }
})
