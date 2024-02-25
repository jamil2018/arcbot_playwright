import winston from 'winston'
import { logsPath } from '../config/test.config'
import { Logger } from '@playwright/test'

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
  log: (name, severity, message, args) => {
    logger.log(severity, message.toString(), args)
  },
}
