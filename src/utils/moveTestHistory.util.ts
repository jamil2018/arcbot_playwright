import fs from 'fs-extra'
import { getPath } from './path.util'

const sourcePath = getPath(`src/reports/history`)
const destinationPath = getPath(`src/reports/results/history`)

const moveFolder = () => {
  try {
    console.log('Adding history from previous run to the test result...')
    // check if source directory is defined
    if (!sourcePath) {
      console.log(`${sourcePath} is not defined. Skipping move.`)
      return
    }
    // check if destination directory is defined
    if (!destinationPath) {
      console.log(`${destinationPath} is not defined. Skipping move.`)
      return
    }
    // check if source directory exists. if not, create the directory
    if (!fs.existsSync(destinationPath)) {
      fs.mkdirSync(destinationPath, { recursive: true })
      console.log(`Created directory: ${destinationPath}`)
    }
    // check if destination directory exists. if it does, skip directory creation
    if (fs.existsSync(destinationPath)) {
      console.log(
        `Directory already exists: ${destinationPath}. skipping directory creation.`
      )
    }

    fs.move(sourcePath, destinationPath, { overwrite: true }, (err) => {
      if (err) {
        console.error('Error moving history folder:', err)
      } else {
        console.log('History folder moved successfully!')
      }
    })
  } catch (error) {
    console.error('Error during move:', error)
  }
}

moveFolder()
