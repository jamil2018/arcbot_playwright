import { Locator, Page } from '@playwright/test'
import { ActionsCore } from '../core/actions.core'

export class InputAction extends ActionsCore {
  constructor(page: Page) {
    super(page)
  }

  async typeInElement(locator: Locator, text: string) {
    await this.executeAction(
      `typing text: "${text}" into element with locator: ${locator.toString()}`,
      async () => {
        await locator.fill(text)
      }
    )
  }
  async clearElementText(locator: Locator) {
    await this.executeAction(
      `clearing text from element with locator: ${locator.toString()}`,
      async () => {
        await locator.clear()
      }
    )
  }

  async checkCheckbox(locator: Locator) {
    await this.executeAction(
      `checking checkbox with locator: ${locator.toString()}`,
      async () => await locator.check()
    )
  }

  async uncheckCheckbox(locator: Locator) {
    await this.executeAction(
      `unchecking checkbox with locator: ${locator.toString()}`,
      async () => await locator.uncheck()
    )
  }

  async selectOption(locator: Locator, value: string) {
    await this.executeAction(
      `selecting option with value: ${value} from dropdown with locator: ${locator.toString()}`,
      async () => await locator.selectOption({ value })
    )
  }
}
