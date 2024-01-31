/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs'
import path from 'path'

export const saveJsonFile = (
  directory: string,
  filename: string,
  content: any
): void => {
  const folderPath = path.join(__dirname, directory)
  const filePath = path.join(folderPath, `${filename}.json`)
  const jsonContent = JSON.stringify(content)

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true })
  }

  fs.writeFileSync(filePath, jsonContent)
}
