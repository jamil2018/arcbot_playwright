import { expect, test } from '@playwright/test'
import { LoginPage } from '../pages/login.page'
import { allure } from 'allure-playwright'
import { Severity } from 'allure-js-commons'
import { ActionBuilder } from '../actions/builder.action'
import { routes } from '../routes/app.route'
import { logger } from '../utils/logger.util'

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
    await expect(page.locator('.app_logo')).toBeVisible({ timeout: 1000 })
  })
})

test.describe('Authentication validation - negative test', () => {
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
    await actions.input.typeInElement(loginPage.passwordField, 'secret')
    await actions.mouse.clickOnElement(loginPage.loginBtn)
    try {
      await expect(page.locator('.app_logo')).toBeVisible({ timeout: 5000 })
    } catch (error) {
      logger.error(error.message)
      throw error
    }
  })
})
