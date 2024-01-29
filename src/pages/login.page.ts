import { Locator } from '@playwright/test'
import { PagesCore } from '../core/pages.core'

class LoginPage extends PagesCore {
  private _usernameField = this.page.locator('#user-name')
  private _passwordField = this.page.locator('#password')
  private _loginBtn = this.page.locator('#login-button')
  private _shoppingCartLink = this.page.locator('.shopping_cart_link')

  get usernameField(): Locator {
    return this._usernameField
  }
  get passwordField(): Locator {
    return this._passwordField
  }
  get loginBtn(): Locator {
    return this._loginBtn
  }
  get shoppingCartLink(): Locator {
    return this._shoppingCartLink
  }
}

export { LoginPage }
