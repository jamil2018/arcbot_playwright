import { test } from '@playwright/test'
import { LoginPage } from '../pages/login.page'
import { allure } from 'allure-playwright'
import { Severity } from 'allure-js-commons'
import { ActionBuilder } from '../actions/builder.action'
import { routes } from '../routes/app.route'

test.describe('Authentication validation', () => {
  test.beforeAll(async () => {
    await allure.parentSuite('Web interface')
    await allure.suite('Essential features')
    await allure.subSuite('Authentication')
  })
  test.beforeEach(async () => {
    // setup suite metadata
    await allure.severity(Severity.CRITICAL)
  })

  test('validate authentication using username and password', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page)
    const actions = new ActionBuilder(page)
    await actions.navigate.navigateToPath(routes.root)
    await actions.input.typeInElement(loginPage.usernameField, 'standard_user')
    await actions.input.typeInElement(loginPage.passwordField, 'secret_sauce')
    await actions.mouse.clickOnElement(loginPage.loginBtn)
    await actions.expect.expectToBeVisible(page.locator('.app_logo'), {
      timeout: 1000,
    })
  })

  test('validate authentication using incorrect username and password', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page)
    const actions = new ActionBuilder(page)
    await actions.navigate.navigateToPath(routes.root)
    await actions.input.typeInElement(loginPage.usernameField, 'standard_user')
    await actions.input.typeInElement(loginPage.passwordField, 'secret')
    await actions.mouse.clickOnElement(loginPage.loginBtn)
    await actions.expect.expectToBeVisible(page.locator('.app_logo'), {
      timeout: 1000,
    })
  })
})
