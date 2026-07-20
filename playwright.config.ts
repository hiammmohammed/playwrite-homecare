import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

const baseURL =
  process.env.ENV === 'local'
    ? process.env.LOCAL_BASE_URL
    : process.env.ENV === 'prod'
    ? process.env.PROD_BASE_URL
    : process.env.STAGE_BASE_URL;

export default defineConfig({
  use: {
    baseURL,
    headless: false,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});