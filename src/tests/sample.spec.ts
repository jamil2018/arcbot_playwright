import { test } from '@playwright/test'
import { LoginPage } from '../pages/login.page'
import { LoginAction } from '../actions/login.action'
import { allure } from 'allure-playwright'
import { Severity } from 'allure-js-commons'
import loginPageData from '../data/login.data.json'

test.describe('Authentication validation', () => {
  test.beforeEach(async () => {
    // setup suite metadata
    await allure.severity(Severity.CRITICAL)
    await allure.parentSuite('Web interface')
    await allure.suite('Essential features')
    await allure.subSuite('Authentication')
  })

  test('validate authentication using username and password', async ({
    page,
  }) => {
    // initializers
    const loginPage = new LoginPage(page)
    const loginActions = new LoginAction(loginPage)

    // setup test metadata
    await allure.description(
      'This test validates the login functionality of the application'
    )

    // execute test steps
    await loginActions.navigateToSite('https://www.saucedemo.com/')
    await loginActions.fillUpUsernameField(loginPageData.username)
    await loginActions.fillUpPasswordField(loginPageData.password)
    await loginActions.clickOnLoginButton()
    await loginActions.validateSuccessfulLogin()
  })
})
