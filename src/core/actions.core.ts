import { Page } from '@playwright/test'
import { PagesCore } from './pages.core'

class ActionsCore {
  protected page: PagesCore
  private _pageInstance: Page
  constructor(page: PagesCore) {
    this.page = page
    this._pageInstance = page.pageInstance
  }

  async navigateToSite(path: string) {
    await this._pageInstance.goto(path)
  }
}

export { ActionsCore }
