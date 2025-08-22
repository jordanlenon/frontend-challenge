import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
    exclude: ['tests/e2e/**', 'node_modules/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'tests/', '**/*.config.js']
    },
    globals: true,
    pool: 'forks',
    poolOptions: {
      forks: {
        singleFork: true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
