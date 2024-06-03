/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';

const coverageExclude = configDefaults?.coverage?.exclude || [];

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./testConfig.ts'],
    coverage: {
      provider: 'v8',
      exclude: [...coverageExclude, '*.config.js'],
      all: true,
    },
  },
  plugins: [react()],
  build: {
    target: 'esnext',
  },
});
