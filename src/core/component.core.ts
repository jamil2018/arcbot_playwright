import { Page } from '@playwright/test'

class ComponentsCore {
  protected page: Page

  constructor(page: Page) {
    this.page = page
  }
}

export { ComponentsCore }
