const generateSuiteExecutionResultTableHeader = () => {
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

const generateResultsSummaryTableHeader = () => {
  return `
        <tr
          style="
          color: #757575;
          height: 56px;
          font-size: 0.92rem;
          border-bottom: 1px solid rgba(224, 224, 224, 1);"
        >
            <th style="padding: 0 24px 0 24px">Total Passed</th>
            <th style="padding: 0 24px 0 24px">Total Failed</th>
            <th style="padding: 0 24px 0 24px">Total Timed Out</th>
            <th style="padding: 0 24px 0 24px">Total Skipped</th>
            <th style="padding: 0 24px 0 24px">Total Interrupted</th>
        </tr>
    `
}

const addSuiteExecutionResultTableRow = (data: {
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

const addResultsSummaryTableRow = (data: {
  pass: number
  fail: number
  timedOut: number
  skipped: number
  interrupted: number
}) => {
  return `
        <tr style="height: 48px">
            <td style="padding: 0 24px 0 24px">${data.pass}</td>
            <td style="padding: 0 24px 0 24px">${data.fail}</td>
            <td style="padding: 0 24px 0 24px">${data.timedOut}</td>
            <td style="padding: 0 24px 0 24px">${data.skipped}</td>
            <td style="padding: 0 24px 0 24px">${data.interrupted}</td>
        </tr>
    `
}

const generateSuiteExecutionTable = (
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
  const rows = data.map((d) => addSuiteExecutionResultTableRow(d)).join('')
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
        ${generateSuiteExecutionResultTableHeader()}
      </thead>
      <tbody style="text-align: center">
        ${rows}
      </tbody>
    </table>`
  return table
}

const generateResultsSummaryTable = (
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
) => {
  const summary = data.reduce(
    (acc, curr) => {
      acc.pass += curr.result.pass
      acc.fail += curr.result.fail
      acc.timedOut += curr.result.timedOut
      acc.skipped += curr.result.skipped
      acc.interrupted += curr.result.interrupted
      return acc
    },
    {
      pass: 0,
      fail: 0,
      timedOut: 0,
      skipped: 0,
      interrupted: 0,
    }
  )
  const table = `
    <table
      style="
        border-collapse: collapse;
        margin: 1.5em 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #fff;
        border-radius: 0.5rem;
        overflow: hidden;
        border: 1px solid #dfdfdf;
      "
    >
      <thead>
        ${generateResultsSummaryTableHeader()}
      </thead>
      <tbody style="text-align: center">
        ${addResultsSummaryTableRow(summary)}
      </tbody>
    </table>`
  return table
}

export const generateHtmlContent = (
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
) => {
  const suiteExecutionTable = generateSuiteExecutionTable(data)
  const resultsSummaryTable = generateResultsSummaryTable(data)
  return `
    <div
      style="
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #333;
        padding: 24px;
      "
    >
      <h1
        style="
          color: #757575;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        "
      >
        Test Execution Report
      </h1>
      <div
        style="
          border: 1px solid #dfdfdf;
          width: fit-content;
          display: flex;
          justify-content: center;
          border-radius: 0.5rem;
          margin-bottom: 1.5rem;
        "
      >
        ${suiteExecutionTable}
      </div>
      <div
        style="
          border: 1px solid #dfdfdf;
          width: fit-content;
          display: flex;
          justify-content: center;
          border-radius: 0.5rem;
          margin-bottom: 1.5rem;
        "
      >
        ${resultsSummaryTable}
      </div>
    </div>
  `
}
