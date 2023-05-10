import ViteRestart from 'vite-plugin-restart';

export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    manifest: true,
    outDir: './web/dist/',
    rollupOptions: {
      input: {
        app: './src/js/app.js',
      },
    },
  },
  server: {
    fs: {
      strict: false,
    },
    origin: 'http://localhost:3000',
    port: 3000,
    strictPort: true,
  },
  plugins: [
    ViteRestart({
      reload: ['./templates/**/*'],
    }),
  ],
});
