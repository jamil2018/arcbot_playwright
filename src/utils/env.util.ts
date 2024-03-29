import dotenv from 'dotenv'
import path from 'path'
import { getPath } from './path.util'

dotenv.config({ path: path.join(__dirname, '../../.env') })

const parseToNumber = (value: string | undefined) => {
  return value ? parseInt(value) : undefined
}

export const envConfig = {
  reportGenerationPath: getPath(process.env.REPORT_GENERATION_PATH),
  testsPath: getPath(process.env.TESTS_PATH),
  emailRecipients: process.env.EMAIL_RECIPIENTS?.split(','),
  baseURL: process.env.BASE_URL,
  localParallelWorkers: parseToNumber(process.env.LOCAL_PARALLEL_WORKERS),
  ciParallelWorkers: parseToNumber(process.env.CI_PARALLEL_WORKERS),
  expectTimeout: parseToNumber(process.env.EXPECT_TIMEOUT),
  testTimeout: parseToNumber(process.env.TEST_TIMEOUT),
  navigationTimeout: parseToNumber(process.env.NAVIGATION_TIMEOUT),
  actionTimeout: parseToNumber(process.env.ACTION_TIMEOUT),
  loggingLevel: process.env.LOGGING_LEVEL,
  outputPath: getPath(process.env.OUTPUT_PATH),
  logsPath: getPath(process.env.LOGS_PATH),
  headless: process.env.HEADLESS === 'true',
  oauth_client_id: process.env.OAUTH_CLIENT_ID,
  oauth_client_secret: process.env.OAUTH_CLIENT_SECRET,
  oauth_redirect_uri: process.env.OAUTH_REDIRECT_URI,
  oauth_refresh_token: process.env.OAUTH_REFRESH_TOKEN,
  oauth_access_token: process.env.OAUTH_ACCESS_TOKEN,
  email_sender: process.env.EMAIL_SENDER,
}
