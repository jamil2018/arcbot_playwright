import { Page } from '@playwright/test'
import { ActionsCore } from '../core/actions.core'
import { LoginPage } from '../pages/login.page'

export class LoginAction extends ActionsCore {
  constructor(page: Page) {
    super(page)
  }
  async login(username: string, password: string) {
    const loginPage = new LoginPage(this.page)
    await loginPage.usernameField.fill(username)
    await loginPage.passwordField.fill(password)
    await loginPage.loginBtn.click()
  }
}
