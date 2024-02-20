import { Page } from '@playwright/test'

export class ActionsCore {
  protected page: Page

  constructor(page: Page) {
    this.page = page
  }
}
