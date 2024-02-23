import { Page } from '@playwright/test'
import { InputAction } from './input.action'
import { NavigationAction } from './navigation.action'
import { MouseAction } from './mouse.action'

export class ActionBuilder {
  public mouse: MouseAction
  public input: InputAction
  public navigate: NavigationAction

  constructor(page: Page) {
    this.mouse = new MouseAction(page)
    this.input = new InputAction(page)
    this.navigate = new NavigationAction(page)
  }
}
