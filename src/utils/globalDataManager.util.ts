import { get, set } from 'node-global-storage'
import { GlobalStorage } from '../types/globalStorage.util'

export const useGlobalStorage = (key: string) => {
  return {
    getState: () => get(key),
    setState: <T>(state: T) => {
      set(key, state)
    },
  } as GlobalStorage
}
