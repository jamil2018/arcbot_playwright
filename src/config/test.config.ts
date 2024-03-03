import { envConfig } from '../utils/env.util'

export const reportGenerationPath = envConfig.reportGenerationPath
export const testsPath = envConfig.testsPath
export const emailRecipients = envConfig.emailRecipients
export const baseURL = envConfig.baseURL || 'https://www.saucedemo.com/v1/'
export const localParallelWorkers = envConfig.localParallelWorkers
export const expectTimeout = envConfig.expectTimeout
export const testTimeout = envConfig.testTimeout
export const navigationTimeout = envConfig.navigationTimeout
export const actionTimeout = envConfig.actionTimeout
export const loggingLevel = envConfig.loggingLevel
export const outputPath = envConfig.outputPath
export const logsPath = envConfig.logsPath
export const headless = envConfig.headless
