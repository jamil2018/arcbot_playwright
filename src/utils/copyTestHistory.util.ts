import fs from 'fs/promises'
import { copySync, pathExistsSync } from 'fs-extra'
import { getPath } from './path.util'

const sourceDir = getPath('src/reports/results/html/history')
const destinationDir = getPath('src/reports/history')

async function copyFolder() {
  console.log('Copying history from previous run...')
  try {
    // check if source directory is defined
    if (!sourceDir) {
      console.log(`${sourceDir} is not defined. Skipping copy.`)
      return
    }
    // Check if source directory exists
    if (!pathExistsSync(sourceDir)) {
      console.log(`${sourceDir} does not exist. Skipping copy.`)
      return
    }
    // check if destination directory is defined
    if (!destinationDir) {
      console.log(`${destinationDir} is not defined. Skipping copy.`)
      return
    }
    // Ensure destination directory exists
    await fs.mkdir(destinationDir, { recursive: true })

    copySync(sourceDir, destinationDir)
    console.log('History copied successfully!')
  } catch (error) {
    console.error('Error during copy:', error)
  }
}

copyFolder()
