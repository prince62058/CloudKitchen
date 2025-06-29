// Build script for static deployment
import { execSync } from 'child_process';
import fs from 'fs';

console.log('Building static version...');

// Create a static version with hardcoded data
const staticConfig = `
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'client/index.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './client/src'),
      '@assets': resolve(__dirname, './client/assets'),
    },
  },
  base: './',
});
`;

fs.writeFileSync('vite.static.config.js', staticConfig);

try {
  execSync('vite build --config vite.static.config.js', { stdio: 'inherit' });
  console.log('Static build completed!');
} catch (error) {
  console.error('Build failed:', error);
}