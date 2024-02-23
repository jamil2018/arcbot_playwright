import { Locator, Page } from '@playwright/test'
import { ComponentsCore } from '../core/component.core'
import { InputAttributes } from '../types/form.component'

export class FormComponent extends ComponentsCore {
  private _inputFieldByNamePlaceholder = 'input[name="%"]'
  private _inputFieldByTypePlaceholder = 'input[type="%"]'
  private _inputFieldByClassPlaceholder = 'input[class="%"]'
  private _inputFieldByIdPlaceholder = 'input[id="%"]'

  constructor(page: Page) {
    super(page)
  }

  getInputFieldByAttribute(attribute: InputAttributes, value: string): Locator {
    switch (attribute) {
      case 'name':
        return this.page.locator(
          this._inputFieldByNamePlaceholder.replace('%', value)
        )
      case 'type':
        return this.page.locator(
          this._inputFieldByTypePlaceholder.replace('%', value)
        )
      case 'class':
        return this.page.locator(
          this._inputFieldByClassPlaceholder.replace('%', value)
        )
      case 'id':
        return this.page.locator(
          this._inputFieldByIdPlaceholder.replace('%', value)
        )
      default:
        throw new Error('Invalid attribute')
    }
  }
}
