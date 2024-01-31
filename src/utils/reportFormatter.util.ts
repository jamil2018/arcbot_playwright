const generateTableHeader = () => {
  return `
        <tr>
            <th>Test Suite</th>
            <th>Passed</th>
            <th>Failed</th>
            <th>Timed Out</th>
            <th>Skipped</th>
            <th>Interrupted</th>
        </tr>
    `
}

const addTableRow = (data: {
  suite: string
  result: {
    pass: number
    fail: number
    timedOut: number
    skipped: number
    interrupted: number
  }
}) => {
  const { suite, result } = data

  return `
        <tr>
            <td>${suite}</td>
            <td>${result.pass}</td>
            <td>${result.fail}</td>
            <td>${result.timedOut}</td>
            <td>${result.skipped}</td>
            <td>${result.interrupted}</td>
        </tr>
    `
}

export const generateHtmlTable = (
  data: {
    suite: string
    result: {
      pass: number
      fail: number
      timedOut: number
      skipped: number
      interrupted: number
    }
  }[]
): string => {
  const rows = data.map((d) => addTableRow(d)).join('')
  const table = `
    <table>
        ${generateTableHeader()}
        ${rows}
    </table>`
  return table
}
