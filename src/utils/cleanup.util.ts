import * as fs from 'fs'
import * as glob from 'glob'

const files: string[] = glob.sync('src/reports/results', { dot: true })
files.forEach((file: string) => {
  if (fs.statSync(file).isDirectory()) {
    fs.rmSync(file, { recursive: true })
  } else {
    fs.unlinkSync(file)
  }
})
