import { Page } from '@playwright/test'
import { logger } from '../utils/logger.util'
import { allure } from 'allure-playwright'
import { screenShotsPath } from '../config/test.config'
import { randomUUID } from 'crypto'

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
      logger.info(description)
      await allure.step(description, async () => await action())
    } catch (error) {
      logger.error(
        `error while executing the step: ${description}\nerror message: ${error.message}`
      )
      const screenshot = await this.page.screenshot({
        path: `${screenShotsPath}/${randomUUID()}.png`,
      })
      allure.attachment('Screenshot', screenshot, 'image/png')
    }
  }
}
