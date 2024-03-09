const generateTableHeader = () => {
  return `
        <tr
          style="
          color: #757575;
          height: 56px;
          font-size: 0.92rem;
          border-bottom: 1px solid rgba(224, 224, 224, 1);"
        >
            <th style="padding: 0 24px 0 24px">Test Suite</th>
            <th style="padding: 0 24px 0 24px">Passed</th>
            <th style="padding: 0 24px 0 24px">Failed</th>
            <th style="padding: 0 24px 0 24px">Timed Out</th>
            <th style="padding: 0 24px 0 24px">Skipped</th>
            <th style="padding: 0 24px 0 24px">Interrupted</th>
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
        <tr style="height: 48px">
            <td style="padding: 0 24px 0 24px">${suite}</td>
            <td style="padding: 0 24px 0 24px">${result.pass}</td>
            <td style="padding: 0 24px 0 24px">${result.fail}</td>
            <td style="padding: 0 24px 0 24px">${result.timedOut}</td>
            <td style="padding: 0 24px 0 24px">${result.skipped}</td>
            <td style="padding: 0 24px 0 24px">${result.interrupted}</td>
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
    <table
      style="
        width: 75%;
        border-collapse: collapse;
        margin: 1.5em 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #fff;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
        border-radius: 0.5rem;
        overflow: hidden;
      "
    >
      <thead>
        ${generateTableHeader()}
      </thead>
      <tbody style="text-align: center">
        ${rows}
      </tbody>
    </table>`
  return table
}
