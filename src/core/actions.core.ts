import { Page } from '@playwright/test'
import { PagesCore } from './pages.core'
import { allure } from 'allure-playwright'

export class ActionsCore {
  protected page: PagesCore
  private _pageInstance: Page
  constructor(page: PagesCore) {
    this.page = page
    this._pageInstance = page.pageInstance
  }

  async navigateToSite(path: string = '/') {
    await allure.step(
      `navigate to test site: ${path}`,
      async () => await this._pageInstance.goto(path)
    )
  }
}
