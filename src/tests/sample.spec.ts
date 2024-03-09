import { test } from '@playwright/test'
import { LoginPage } from '../pages/login.page'
import { allure } from 'allure-playwright'
import { Severity } from 'allure-js-commons'
import { ActionBuilder } from '../actions/builder.action'
import { routes } from '../routes/app.route'
import { SECOND } from '../constants/time.constant'
import loginData from '../data/login.data.json'
import { HomePage } from '../pages/home.page'

// common test variable declarations
let actions: ActionBuilder
let loginPage: LoginPage
let homePage: HomePage

test.describe('Authentication validation', () => {
  test.beforeEach(async ({ page }) => {
    // report metadata initialization
    await allure.parentSuite('Web interface')
    await allure.suite('Essential features')
    await allure.subSuite('Authentication')

    // test variable initialization
    loginPage = new LoginPage(page)
    actions = new ActionBuilder(page)
    homePage = new HomePage(page)
  })

  test('validate authentication using valid username and password', async () => {
    // setup test metadata
    await allure.severity(Severity.CRITICAL)
    // actions
    await actions.navigate.navigateToPath(routes.root)
    await actions.input.typeInElement(
      loginPage.usernameField,
      loginData.username
    )
    await actions.input.typeInElement(
      loginPage.passwordField,
      loginData.password
    )
    await actions.mouse.clickOnElement(loginPage.loginBtn)
    await actions.expect.expectToBeVisible(homePage.logo, {
      timeout: 1 * SECOND,
    })
  })

  test('validate authentication using invalid username and password', async () => {
    // setup test metadata
    await allure.severity(Severity.CRITICAL)
    // actions
    await actions.navigate.navigateToPath(routes.root)
    await actions.input.typeInElement(
      loginPage.usernameField,
      loginData.username
    )
    await actions.input.typeInElement(
      loginPage.passwordField,
      loginData.password
    )
    await actions.mouse.clickOnElement(loginPage.loginBtn)
    // this test will fail
    await actions.expect.expectToBeVisible(homePage.logo, {
      timeout: 1 * SECOND,
    })
  })
})
