import winston from 'winston'
import { Logger } from '@playwright/test'
import { logsPath } from '../config/test.config'

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.json(),
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    })
  ),
  transports: [
    new winston.transports.File({
      filename: 'error.log',
      level: 'error',
      dirname: logsPath,
    }),
    new winston.transports.File({
      filename: 'combined.log',
      dirname: logsPath,
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
})

export const playwrightLogger: Logger = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isEnabled: (_name, _severity) => true,
  log: (_name, severity, message, args) => {
    logger.log(severity, message.toString(), args)
  },
}
