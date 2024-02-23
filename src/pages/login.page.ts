import { Locator, Page } from '@playwright/test'
import { PagesCore } from '../core/pages.core'
import { FormComponent } from '../components/form.component'

class LoginPage extends PagesCore {
  // locators
  private _loginBtn = this.page.locator('#login-button')
  private _shoppingCartLink = this.page.locator('.shopping_cart_link')

  // identifiers
  private _usernameField = 'user-name'
  private _passwordField = 'password'

  // components
  private _formComponent: FormComponent

  constructor(page: Page) {
    super(page)
    this._formComponent = new FormComponent(page)
  }

  get usernameField(): Locator {
    return this._formComponent.getInputFieldByAttribute(
      'id',
      this._usernameField
    )
  }
  get passwordField(): Locator {
    return this._formComponent.getInputFieldByAttribute(
      'id',
      this._passwordField
    )
  }
  get loginBtn(): Locator {
    return this._loginBtn
  }
  get shoppingCartLink(): Locator {
    return this._shoppingCartLink
  }
}

export { LoginPage }
