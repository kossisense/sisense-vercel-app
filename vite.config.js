// -----------------------------------------------------------------------------
// FILE: vite.config.js
// PURPOSE: Configuration for the Vite development server and build tool.
// -----------------------------------------------------------------------------

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});