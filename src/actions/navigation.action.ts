import { Page } from '@playwright/test'
import { ActionsCore } from '../core/actions.core'

export class NavigationAction extends ActionsCore {
  constructor(page: Page) {
    super(page)
  }

  async navigateToPath(path: string = '/') {
    await this.executeAction(`navigating to path: ${path}`, async () => {
      await this.page.goto(path)
    })
  }

  async refreshPage() {
    await this.executeAction(`refreshing the page`, async () => {
      await this.page.reload()
    })
  }

  async goBack() {
    await this.executeAction(`going back to previous page`, async () => {
      await this.page.goBack()
    })
  }

  async goForward() {
    await this.executeAction(`going forward to next page`, async () => {
      await this.page.goForward()
    })
  }
}
