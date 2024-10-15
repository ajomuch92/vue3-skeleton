import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'Vue3Skeleton',
      fileName: 'v3-skeleton',
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue'],
      preserveModules: false,
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
