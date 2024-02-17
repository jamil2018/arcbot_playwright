import { Locator, Page } from '@playwright/test'
import { allure } from 'allure-playwright'
import { ActionsCore } from '../core/actions.core'

export class ClickAction extends ActionsCore {
  constructor(page: Page) {
    super(page)
  }

  async clickOnElement(locator: Locator) {
    await allure.step(
      `clicking on element with locator: ${locator.toString()}`,
      async () => await locator.click()
    )
  }

  async doubleClickOnElement(locator: Locator) {
    await allure.step(
      `double clicking on element with locator: ${locator.toString()}`,
      async () => await locator.dblclick()
    )
  }

  async rightClickOnElement(locator: Locator) {
    await allure.step(
      `right clicking on element with locator: ${locator.toString()}`,
      async () => await locator.click({ button: 'right' })
    )
  }

  async hoverOnElement(locator: Locator) {
    await allure.step(
      `hovering on element with locator: ${locator.toString()}`,
      async () => await locator.hover()
    )
  }

  async checkCheckbox(locator: Locator) {
    await allure.step(
      `checking checkbox with locator: ${locator.toString()}`,
      async () => await locator.check()
    )
  }

  async uncheckCheckbox(locator: Locator) {
    await allure.step(
      `unchecking checkbox with locator: ${locator.toString()}`,
      async () => await locator.uncheck()
    )
  }

  async selectOption(locator: Locator, value: string) {
    await allure.step(
      `selecting option with value: ${value} from dropdown with locator: ${locator.toString()}`,
      async () => await locator.selectOption({ value })
    )
  }
}
