import { Page } from '@playwright/test'
import { InputAction } from './input.action'
import { NavigationAction } from './navigation.action'
import { MouseAction } from './mouse.action'
import { Expect } from './expect.action'

export class ActionBuilder {
  public mouse: MouseAction
  public input: InputAction
  public navigate: NavigationAction
  public expect: Expect

  constructor(page: Page) {
    this.mouse = new MouseAction(page)
    this.input = new InputAction(page)
    this.navigate = new NavigationAction(page)
    this.expect = new Expect(page)
  }
}
