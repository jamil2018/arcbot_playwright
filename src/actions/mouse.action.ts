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
