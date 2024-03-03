import { Locator, Page, expect } from '@playwright/test'
import { ActionsCore } from '../core/actions.core'

export class Expect extends ActionsCore {
  constructor(page: Page) {
    super(page)
  }

  expectToBeVisible(locator: Locator, options?: { timeout?: number }) {
    return this.executeAction(
      `expecting element with locator: ${locator.toString()} to be visible`,
      async () => {
        await expect(locator).toBeVisible(options)
      }
    )
  }
}
