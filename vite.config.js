import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [vue(), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: { reporter: ['text'], include: ['**/*.vue'] }
  },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'),
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    }
  }
})
