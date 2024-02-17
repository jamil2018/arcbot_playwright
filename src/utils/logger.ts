import { pino } from 'pino'
import { loggingLevel, logsPath } from '../config/test.config'

const generateLogFilePath = () => `${logsPath}/${Date.now()}.log`

let callCount = 0
let filePath = ''

const getFilePath = () => {
  if (callCount === 0) {
    callCount++
    filePath = generateLogFilePath()
  }
  callCount++
  return filePath
}

const loggerConfig = {
  level: loggingLevel,
  transport: {
    targets: [
      {
        target: 'pino/file',
        options: {
          destination: getFilePath(),
          level: loggingLevel,
        },
      },
      {
        target: 'pino-pretty',
        options: {
          colorize: true,
          ignore: 'pid,hostname',
          level: loggingLevel,
        },
      },
    ],
  },
}

export const logger = pino(loggerConfig)
