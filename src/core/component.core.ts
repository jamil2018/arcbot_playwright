import { Page } from '@playwright/test'

export class ComponentsCore {
  protected page: Page

  constructor(page: Page) {
    this.page = page
  }
}
