import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'

export default defineConfig({
    base: './',
    publicDir: 'public',
    plugins: [
        vue2(),
        legacy({
            targets: ['last 2 versions', 'not dead', '> 5%'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        })
    ],
    build: {
        rollupOptions: {
            output: {
                dir: 'dist',
                entryFileNames: '[hash].js',
                chunkFileNames: 'chunks/[hash].js',
                assetFileNames: 'assets/[hash][extname]',
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        }
    }
})
