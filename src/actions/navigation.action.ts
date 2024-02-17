import { Page } from "@playwright/test";
import { ActionsCore } from "../core/actions.core";
import {allure} from "allure-playwright"


export class NavigationAction extends ActionsCore {
    constructor(page: Page){
        super(page)
    }

    async navigateToPath(path: string = '/') {
        await allure.step(
          `navigating to path: ${path}`,
          async () => await this.page.goto(path)
        )
    }

    async refreshPage() {
        await allure.step(
          `refreshing page`,
          async () => await this.page.reload()
        )
    }

    async goBack() {
        await allure.step(
          `going back to previous page`,
          async () => await this.page.goBack()
        )
    }

    async goForward() {
        await allure.step(
          `going forward to next page`,
          async () => await this.page.goForward()
        )
    }
}