import { Page } from '@playwright/test'
import { logger } from '../utils/logger.util'
import { allure } from 'allure-playwright'

export class ActionsCore {
  protected page: Page

  constructor(page: Page) {
    this.page = page
  }

  protected async executeAction<T>(
    description: string,
    action: () => Promise<T>
  ) {
    try {
      logger.info(`Executing the step: ${description}`)
      await allure.step(description, async () => await action())
    } catch (error) {
      logger.error(
        `Error while executing the step: ${description}\nerror message: ${error.message}`
      )
      throw error
    }
  }
}
