import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Kasa/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'public/index.html'
    }
  }
});
