import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';  // Or your framework plugin

export default defineConfig({
  plugins: [react()],
  base: '/quiz_app/',  // Replace with your GitHub repository name
});