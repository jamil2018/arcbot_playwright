import { ActionsCore } from '../core/actions.core'
import { PagesCore } from '../core/pages.core'

class SampleActions extends ActionsCore {
  constructor(page: PagesCore) {
    super(page)
  }
}

export { SampleActions }
