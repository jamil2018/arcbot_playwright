import { Page } from '@playwright/test'

export class PagesCore {
  protected page: Page

  constructor(page: Page) {
    this.page = page
  }
}
