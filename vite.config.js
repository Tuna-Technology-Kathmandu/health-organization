import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/graphql': {
  //       target: 'https://test.devabhishek.com',
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
});
