import { allure } from 'allure-playwright'
import { ActionsCore } from '../core/actions.core'
import { LoginPage } from '../pages/login.page'
import { expect } from '@playwright/test'

export class LoginAction extends ActionsCore {
  private _page: LoginPage
  constructor(page: LoginPage) {
    super(page)
    this._page = page
  }
  async fillUpUsernameField(value: string) {
    await allure.step(
      `fill up the username field with value: ${value}`,
      async () => await this._page.usernameField.fill(value)
    )
  }
  async fillUpPasswordField(value: string) {
    await allure.step(
      `fill up the password field with value: ${value}`,
      async () => await this._page.passwordField.fill(value)
    )
  }
  async clickOnLoginButton() {
    await allure.step(
      'click on the login button',
      async () => await this._page.loginBtn.click()
    )
  }
  async validateSuccessfulLogin() {
    await allure.step(
      'validate user is able to successfully login into the app',
      async () => await expect(this._page.shoppingCartLink).toBeVisible()
    )
  }
}
