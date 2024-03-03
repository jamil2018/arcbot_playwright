import appRootPath from 'app-root-path'
import path from 'path'

export const getPath = (value: string | undefined) => {
  return value ? path.join(appRootPath.toString(), value) : undefined
}
