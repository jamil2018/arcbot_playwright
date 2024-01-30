import type {
  FullConfig,
  FullResult,
  Reporter,
  Suite,
  TestCase,
  TestResult,
} from '@playwright/test/reporter'

enum StatusTypes {
  'PASSED' = 'passed',
  'FAILED' = 'failed',
  'TIMEDOUT' = 'timedOut',
  'SKIPPED' = 'skipped',
  'INTERRUPTED' = 'interrupted',
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

  instantiateNewTestResult() {
    this.testReport.push({
      suite: '',
      totalTestsPassed: 0,
      totalTestsFailed: 0,
      totalTestsTimedOut: 0,
      totalTestSkipped: 0,
      totalTestInterrupted: 0,
    })
  }

  generateSuiteTestResult() {
    console.log(`
        test passed: ${this._suiteTestPassCount}
        test failed: ${this._suiteTestFailCount}
        test timed out: ${this._suiteTestTimeoutCount}
        test skipped: ${this._suiteTestSkippedCount}
        test interrupted: ${this._suiteTestInterruptedCount}
    `)
  }

  updateTestResultCounters(result: TestResult, suite: string) {
    const currentSuite = this.testReport.find((t) => t.suite === suite)
    if (currentSuite === null) return
    else {
      switch (result.status) {
        case StatusTypes.PASSED:
          currentSuite.totalTestsPassed = currentSuite.totalTestsPassed++
          break
        case StatusTypes.FAILED:
          this._suiteTestFailCount++
          break
        case StatusTypes.TIMEDOUT:
          this._suiteTestTimeoutCount++
          break
        case StatusTypes.SKIPPED:
          this._suiteTestSkippedCount++
          break
        case StatusTypes.INTERRUPTED:
          this._suiteTestInterruptedCount++
      }
    }
  }
  onBegin(config: FullConfig, suite: Suite) {
    console.log(`Total tests: ${suite.allTests.length}`)
    this.resetTestResultCounters()
  }

  onTestBegin(test: TestCase) {
    console.log(`Starting test ${test.title} from suite: ${test.parent.title}`)
  }

  onTestEnd(test: TestCase, result: TestResult) {
    console.log(`Finished test ${test.title}: ${result.status}`)
    this.updateTestResultCounters(result, test.parent.title)
  }

  onEnd(result: FullResult) {
    console.log(`Finished the run: ${result.status}`)
    this.generateSuiteTestResult()
  }
}

export default EmailReporter
