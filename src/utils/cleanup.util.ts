import * as fs from 'fs'
import * as glob from 'glob'
import { reportGenerationPath } from '../config/test.config'

const files: string[] = glob.sync(reportGenerationPath, { dot: true })
files.forEach((file: string) => {
  if (fs.statSync(file).isDirectory()) {
    fs.rmSync(file, { recursive: true })
  } else {
    fs.unlinkSync(file)
  }
})
