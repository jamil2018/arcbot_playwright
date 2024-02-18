import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(__dirname, '../../.env') })

const parseToNumber = (value: string | undefined) => {
  return value ? parseInt(value) : undefined
}

const getPath = (value: string | undefined) => {
  return value
    ? path.join(path.relative(__dirname, process.cwd()), value)
    : undefined
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
  screenShotsPath: getPath(process.env.SCREEN_SHOTS_PATH),
  logsPath: process.env.LOGS_PATH,
  headless: process.env.HEADLESS === 'true',
}
