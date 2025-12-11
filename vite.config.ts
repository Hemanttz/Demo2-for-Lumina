import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Defines process.env for the browser to prevent crashes when accessing API_KEY
    'process.env': {
      API_KEY: process.env.API_KEY
    }
  }
});