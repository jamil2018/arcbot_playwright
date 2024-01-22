import fs from 'fs'
import path from 'path'
import { Command } from 'commander'

const program = new Command()

enum FileType {
  'PAGE' = 'pages',
  'ACTION' = 'actions',
  'COMPONENT' = 'components',
  'TEST' = 'tests',
}

const createFile = (fileName: string, content: string, type: FileType) => {
  const refactoredFileName = refactorFileName(fileName)
  const filePath = path.join(__dirname, '..', type, `${refactoredFileName}.ts`)
  fs.writeFile(filePath, content, (err) => {
    if (err) throw err
    console.log(`${fileName}.ts has been created`)
  })
}

const refactorFileName = (fileName: string): string => {
  return fileName
    .split('.')
    .filter((part) => (part === 'ts' ? null : part))
    .join('.')
}

program
  .command('create-page-file <fileName> <className>')
  .description('Create a new page class')
  .action((fileName: string, className: string) => {
    const content = `import { Page } from '@playwright/test'
import { PagesCore } from '../core/pages.core'

export default class ${className} extends PagesCore {
  constructor(page: Page) {
    super(page)
  }
}
`
    createFile(fileName, content, FileType.PAGE)
  })

program
  .command('create-action-file <fileName> <className>')
  .description('Create a new action class')
  .action((fileName: string, className: string) => {
    const content = `import { ActionsCore } from '../core/actions.core'
import { PagesCore } from '../core/pages.core'

export default class ${className} extends ActionsCore {
  constructor(page: PagesCore) {
    super(page)
  }
}
`
    createFile(fileName, content, FileType.ACTION)
  })

program
  .command('create-component-file <fileName> <className>')
  .description('Create a new component file with component class')
  .action((fileName: string, className: string) => {
    const content = `import { Page } from '@playwright/test'
import { ComponentsCore } from '../core/component.core'

export class ${className} extends ComponentsCore {
  constructor(page: Page) {
    super(page)
  }
}    
`
    createFile(fileName, content, FileType.COMPONENT)
  })

program
  .command('create-test-file <fileName>')
  .description('Create a new test file')
  .action((fileName: string) => {
    const content = `import { test } from '@playwright/test'

test('example test', async ({ page }) => {
  console.log('write your tests here')
})  
`
    createFile(fileName, content, FileType.TEST)
  })

program.parse(process.argv)
