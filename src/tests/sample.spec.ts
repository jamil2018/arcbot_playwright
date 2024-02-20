import { test } from '@playwright/test'
import { allure } from 'allure-playwright'
import { Severity } from 'allure-js-commons'
import loginData from '../data/login.data.json'
import { routes } from '../routes/app.route'
import { LoginAction } from '../actions/login.action'

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
    const loginAction = new LoginAction(page)
    await page.goto(routes.login)
    await loginAction.login(loginData.username, loginData.password)
  })
})
