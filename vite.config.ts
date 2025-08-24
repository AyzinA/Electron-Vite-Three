// vite.config.ts
import { defineConfig } from 'vite';
import electron from 'vite-plugin-electron/simple';

export default defineConfig({
  resolve: {
    // Avoids multiple copies of three in dev (important for helpers/controls)
    dedupe: ['three'],
  },
  plugins: [
    electron({
      // Electron main process
      main: {
        entry: 'electron/main.ts',
        onstart({ startup }) {
          // Auto-launch Electron after the Vite dev server is ready
          startup();
        },
      },
      // Preload scripts
      preload: {
        input: { preload: 'electron/preload.ts' },
      },
    }),
  ],
});
