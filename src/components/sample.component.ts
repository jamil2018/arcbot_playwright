import { Page } from '@playwright/test'
import { ComponentsCore } from '../core/component.core'

class FormComponent extends ComponentsCore {
  constructor(page: Page) {
    super(page)
  }
}
