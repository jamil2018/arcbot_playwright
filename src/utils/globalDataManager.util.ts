import { get, set } from 'node-global-storage'
import { GlobalStorage } from '../types/globalStorage.util'

export const useGlobalStorage = (key: string): GlobalStorage => {
  return [() => get(key), (state) => set(key, state)]
}
