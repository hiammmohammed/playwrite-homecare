import dotenv from 'dotenv';

dotenv.config();

type EnvType = 'local' | 'stage' | 'production';

const envType: EnvType = (process.env.ENV as EnvType) || 'local';

const config: Record<EnvType, { baseUrl: string }> = {
  local: {
    baseUrl: process.env.LOCAL_BASE_URL || 'http://localhost:4200',
  },
  stage: {
    baseUrl: process.env.STAGE_BASE_URL || '',
  },
  production: {
    baseUrl: process.env.PROD_BASE_URL || '',
  },
};

export const environment = {
  baseUrl: config[envType].baseUrl,

  email: process.env.TEST_EMAIL || '',
  password: process.env.TEST_PASSWORD || '',

  apiUrl: process.env.API_URL || '',

  xGuard: process.env.X_GUARD || 'dashboard-alborg-v1',

  env: envType,
};