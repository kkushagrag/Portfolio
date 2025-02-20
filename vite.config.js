import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'kkushagrag/Portfolio.git', // Replace <repository-name> with the name of your GitHub repository
});
