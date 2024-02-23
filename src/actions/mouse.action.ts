import { Locator, Page } from '@playwright/test'
import { ActionsCore } from '../core/actions.core'

export class MouseAction extends ActionsCore {
  constructor(page: Page) {
    super(page)
  }

  async clickOnElement(locator: Locator) {
    await this.executeAction(
      `clicking on element with locator: ${locator.toString()}`,
      async () => {
        await locator.click()
      }
    )
  }

  async doubleClickOnElement(locator: Locator) {
    await this.executeAction(
      `double clicking on element with locator: ${locator.toString()}`,
      async () => await locator.dblclick()
    )
  }

  async rightClickOnElement(locator: Locator) {
    await this.executeAction(
      `right clicking on element with locator: ${locator.toString()}`,
      async () => await locator.click({ button: 'right' })
    )
  }

  async hoverOnElement(locator: Locator) {
    await this.executeAction(
      `hovering on element with locator: ${locator.toString()}`,
      async () => await locator.hover()
    )
  }
}
