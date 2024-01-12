import { Page } from '@playwright/test'
import { PagesCore } from '../core/pages.core'

class SamplePage extends PagesCore {
  constructor(page: Page) {
    super(page)
  }
}

export { SamplePage }
