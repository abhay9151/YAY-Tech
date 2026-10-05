import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: false,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'scheduler'],
          motion: ['framer-motion'],
          gsap: ['gsap'],
          router: ['react-router', 'react-router-dom', '@remix-run/router'],
          icons: ['lucide-react'],
          lenis: ['lenis'],
        },
      },
    },
  },
});
