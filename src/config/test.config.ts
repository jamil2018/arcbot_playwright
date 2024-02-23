import path from 'path'
import { LOGLEVEL } from '../constants/log.constant'
import { MINUTE } from '../constants/time.constant'
import { envConfig } from '../utils/env.util'

export const reportGenerationPath =
  envConfig.reportGenerationPath || 'src/reports/results'
export const testsPath = envConfig.testsPath || '../tests'
export const emailRecipients = envConfig.emailRecipients || []
export const baseURL = envConfig.baseURL || 'https://www.saucedemo.com/v1/'
export const localParallelWorkers = envConfig.localParallelWorkers || 1
export const expectTimeout = envConfig.expectTimeout || 2 * MINUTE
export const testTimeout = envConfig.testTimeout || 10 * MINUTE
export const navigationTimeout = envConfig.navigationTimeout || 2 * MINUTE
export const actionTimeout = envConfig.actionTimeout || 1 * MINUTE
export const loggingLevel = envConfig.loggingLevel || LOGLEVEL.DEBUG
export const screenShotsPath =
  envConfig.screenShotsPath || path.join(__dirname, '../reports/screenshots')
export const logsPath = envConfig.logsPath || 'src/logs'
export const headless = envConfig.headless || false
