export const generateHtmlTable = (data: {
  suite: string
  result: {
    pass: number
    fail: number
    timedOut: number
    skipped: number
    interrupted: number
  }
}): string => {
  const { suite, result } = data
  const passCount = result.pass
  const failCount = result.fail

  const table = `<table>
        <tr>
            <th>Test Suite</th>
            <th>Passed</th>
            <th>Failed</th>
        </tr>
        <tr>
            <td>${suite}</td>
            <td>${passCount}</td>
            <td>${failCount}</td>
        </tr>
    </table>`

  return table
}
