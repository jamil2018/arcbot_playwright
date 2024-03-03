import fs from 'fs/promises'
import path from 'path'
import { Command } from 'commander'

const program = new Command()

enum FileType {
  'PAGE' = 'pages',
  'ACTION' = 'actions',
  'COMPONENT' = 'components',
  'TEST' = 'tests',
}

const createFile = async (
  fileName: string,
  content: string,
  type: FileType
) => {
  const refactoredFileName = refactorFileName(fileName)
  const filePath = path.resolve(
    __dirname,
    '..',
    type,
    `${refactoredFileName}.ts`
  )
  try {
    await fs.writeFile(filePath, content)
    console.log(`${fileName}.ts has been created`)
  } catch (err) {
    console.error(`Error creating file: ${err}`)
  }
}

const refactorFileName = (fileName: string): string => {
  return fileName
    .split('.')
    .filter((part) => (part === 'ts' ? null : part))
    .join('.')
}

const getPageContent = (
  className: string
) => `import { Page } from '@playwright/test'
import { PagesCore } from '../core/pages.core'

export class ${className} extends PagesCore {
  constructor(page: Page) {
    super(page)
  }
}
`

const getActionContent = (
  actionClassName: string
) => `import { ActionsCore } from '../core/actions.core'
import {Page} from "@playwright/test";

export class ${actionClassName} extends ActionsCore {
  constructor(page: Page) {
    super(page)
  }
}
`

const getComponentContent = (
  className: string
) => `import { Page } from '@playwright/test'
import { ComponentsCore } from '../core/component.core'

export class ${className} extends ComponentsCore {
  constructor(page: Page) {
    super(page)
  }
}    
`

const getTestContent = () => `import { test } from '@playwright/test'

test('example test', async ({ page }) => {
  console.log('write your tests here')
})  
`

program
  .command('create-page-file <fileName> <className>')
  .description('Create a new page class')
  .action((fileName: string, className: string) => {
    const content = getPageContent(className)
    createFile(fileName, content, FileType.PAGE)
  })

program
  .command('create-action-file <fileName> <className>')
  .description('Create a new action class')
  .action((fileName: string, className: string) => {
    const content = getActionContent(className)
    createFile(fileName, content, FileType.ACTION)
  })

program
  .command('create-component-file <fileName> <className>')
  .description('Create a new component file with component class')
  .action((fileName: string, className: string) => {
    const content = getComponentContent(className)
    createFile(fileName, content, FileType.COMPONENT)
  })

program
  .command('create-test-file <fileName>')
  .description('Create a new test file')
  .action((fileName: string) => {
    const content = getTestContent()
    createFile(fileName, content, FileType.TEST)
  })

program.parse(process.argv)
