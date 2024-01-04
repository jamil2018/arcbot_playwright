export function iterateOverObjectItems(
  iterationObject: object,
  callbackFunction: (value: string) => void
) {
  Object.keys(iterationObject).map((key) =>
    callbackFunction(iterationObject[key])
  )
}
