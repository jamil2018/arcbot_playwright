import { defineConfig, devices } from '@playwright/test'
import os from 'os'
import {
  actionTimeout,
  baseURL,
  expectTimeout,
  headless,
  localParallelWorkers,
  navigationTimeout,
  reportGenerationPath,
  testTimeout,
  testsPath,
} from './test.config'

export default defineConfig({
  testDir: testsPath,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : localParallelWorkers,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  timeout: testTimeout,
  reporter: [
    ['../utils/jsonReporter.util.ts'],
    ['list'],
    [
      'allure-playwright',
      {
        outputFolder: reportGenerationPath,
        suiteTitle: true,
        detail: true,
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
        },
      },
    ],
  ],
  expect: {
    timeout: expectTimeout,
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: baseURL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    actionTimeout: actionTimeout,
    navigationTimeout: navigationTimeout,
    headless: headless,
    screenshot: 'only-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
})
