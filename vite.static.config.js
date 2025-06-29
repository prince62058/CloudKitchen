import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: './client',
  build: {
    outDir: '../dist-static',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './client/src'),
      '@assets': resolve(__dirname, './client/assets'),
      '@shared': resolve(__dirname, './shared'),
    },
  },
  base: './',
});