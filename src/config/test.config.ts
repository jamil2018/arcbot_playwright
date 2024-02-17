import path from 'path'
import { LOGLEVEL } from '../constants/log.constant'
import { MINUTE } from '../constants/time.constant'

export const reportGenerationPath = 'src/reports/results'
export const testsPath = '../tests'
export const emailRecipients = ['hasnat.jamil@enosisbd.com']
export const baseURL = 'https://www.saucedemo.com/v1/'
export const localParallelWorkers = 1
export const expectTimeout = 2 * MINUTE
export const testTimeout = 10 * MINUTE
export const navigationTimeout = 2 * MINUTE
export const actionTimeout = 1 * MINUTE
export const loggingLevel = LOGLEVEL.DEBUG
export const screenShotsPath = path.join(__dirname, '../reports/screenshots')
export const logsPath = 'src/logs'
export const headless = false
