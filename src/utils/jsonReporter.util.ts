import type {
  FullResult,
  Reporter,
  TestCase,
  TestResult,
} from '@playwright/test/reporter'
import { saveJsonFile } from './file.util'

const StatusTypes = {
  PASSED: 'passed',
  FAILED: 'failed',
  TIMEDOUT: 'timedOut',
  SKIPPED: 'skipped',
  INTERRUPTED: 'interrupted',
}

interface TestReport {
  suite: string
  totalTestsPassed: number
  totalTestsFailed: number
  totalTestsTimedOut: number
  totalTestSkipped: number
  totalTestInterrupted: number
}

class EmailReporter implements Reporter {
  private testReport: TestReport[] = []

  instantiateNewTestResult(suite: string) {
    const newTestResult: TestReport = {
      suite,
      totalTestsPassed: 0,
      totalTestsFailed: 0,
      totalTestsTimedOut: 0,
      totalTestSkipped: 0,
      totalTestInterrupted: 0,
    }
    this.testReport.push(newTestResult)
  }
  async generateSuiteTestResult() {
    const testReportJson = this.testReport.map((i) => ({
      suite: i.suite,
      result: {
        pass: i.totalTestsPassed,
        fail: i.totalTestsFailed,
        timedOut: i.totalTestsTimedOut,
        skipped: i.totalTestSkipped,
        interrupted: i.totalTestInterrupted,
      },
    }))
    saveJsonFile('../reports/results/json', 'testResult', testReportJson)
  }

  updateTestResultCounters(result: TestResult, suite: string) {
    let currentSuiteIndex = this.testReport.findIndex((t) => t.suite === suite)
    if (currentSuiteIndex === -1) {
      this.instantiateNewTestResult(suite)
      currentSuiteIndex = this.testReport.length - 1
    }

    const currentSuite = this.testReport[currentSuiteIndex]
    currentSuite.suite = suite

    const counterMap: { [key in keyof typeof StatusTypes]?: keyof TestReport } =
      {
        [StatusTypes.PASSED]: 'totalTestsPassed',
        [StatusTypes.FAILED]: 'totalTestsFailed',
        [StatusTypes.TIMEDOUT]: 'totalTestsTimedOut',
        [StatusTypes.SKIPPED]: 'totalTestSkipped',
        [StatusTypes.INTERRUPTED]: 'totalTestInterrupted',
      }

    if (counterMap[result.status]) {
      ++currentSuite[counterMap[result.status] as keyof TestReport]
    }

    this.testReport[currentSuiteIndex] = currentSuite
  }

  onTestBegin(test: TestCase) {
    console.log(`Starting test ${test.title} from suite: ${test.parent.title}`)
  }

  onTestEnd(test: TestCase, result: TestResult) {
    console.log(`Finished test ${test.title}: ${result.status}`)
    this.updateTestResultCounters(result, test.parent.title)
  }

  async onEnd(result: FullResult) {
    console.log(`Finished the run: ${result.status}`)
    await this.generateSuiteTestResult()
  }
}

export default EmailReporter
