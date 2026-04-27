import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm run dev -- --host',
    url: 'http://127.0.0.1:5173',
    timeout: 120000,
    reuseExistingServer: false,
  },

  use: {
    baseURL: 'http://127.0.0.1:5173',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
