import { Locator, Page } from '@playwright/test'
import { PagesCore } from '../core/pages.core'

export class HomePage extends PagesCore {
  // locators
  private _logo = this.page.locator('.app_logo')

  constructor(page: Page) {
    super(page)
  }

  get logo(): Locator {
    return this._logo
  }
}
