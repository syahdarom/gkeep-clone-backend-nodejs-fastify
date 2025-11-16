import viteTsconfigPath from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    viteTsconfigPath({
      configNames: ['tsconfig.test.json'],
    }),
  ],
});
