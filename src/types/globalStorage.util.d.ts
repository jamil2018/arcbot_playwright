/* eslint-disable @typescript-eslint/no-explicit-any */
export interface GlobalStorage {
  getState: () => any
  setState: (state: any) => any
}
