import * as fs from 'fs'
import * as glob from 'glob'
import {
  logsPath,
  outputPath,
  reportGenerationPath,
} from '../config/test.config'

console.log('Starting cleanup process...')

const files: string[] = glob.sync(
  [reportGenerationPath!, outputPath!, logsPath!],
  {
    dot: true,
  }
)

files.forEach((file: string) => {
  try {
    if (fs.statSync(file).isDirectory()) {
      fs.rmSync(file, { recursive: true })
      console.log(`Deleted directory: ${file}`)
    } else {
      fs.unlinkSync(file)
      console.log(`Deleted file: ${file}`)
    }
  } catch (error) {
    if (error) {
      console.error('Error while deleting file: ', error)
    }
  }
})

console.log('Cleanup process completed')
