import { test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')
  await page.fill('#user-name', 'standard_user')
  await page.fill('#password', 'secret_sauce')
  await page.click('#login-button')
})
