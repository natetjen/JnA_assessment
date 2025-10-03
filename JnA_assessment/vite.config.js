import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // mark all Lit components as custom
          isCustomElement: (tag) => tag.endsWith('-lit'),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      buffer: 'buffer',
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true,
        })
      ]
    }
  },
  define: {
    global: 'globalThis',
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['__tests__/**/*.test.js'],
    setupFiles: ['./vitest.setup.js'],

  },
})
