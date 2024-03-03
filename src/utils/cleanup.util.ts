import * as fs from 'fs'
import * as glob from 'glob'
import { outputPath, reportGenerationPath } from '../config/test.config'

const files: string[] = glob.sync([reportGenerationPath!, outputPath!], {
  dot: true,
})

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
