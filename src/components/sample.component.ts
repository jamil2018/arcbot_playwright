import { Page } from '@playwright/test'
import { ComponentsCore } from '../core/component.core'

export class SampleComponent extends ComponentsCore {
  constructor(page: Page) {
    super(page)
  }
}
