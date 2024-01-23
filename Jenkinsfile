pipeline{
    agent any

    parameters {
        choice(choices: ['Chrome', 'Firefox', 'Safari', 'All'], description: 'Select the browser(s) to run tests on', name: 'TEST_BROWSER')
    }

    stages{
        stage('Checkout SCM'){
            steps{
                checkout scm
            }
        }
        stage('Install Node Dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage('Install Browsers'){
            steps{
                sh 'npx playwright install'
            }
        }
        stage('Install Playwright Dependencies'){
            steps{
                s 'sudo npx playwright install-deps'
            }
        }
        stage('Run Tests'){
            // steps{
            //     switch("${params.TEST_BROWSER}") {
            //         case 'Chrome':
            //             sh 'npm run test:chrome'
            //             break
            //         case 'Firefox':
            //             sh 'npm run test:firefox'
            //             break
            //         case 'Safari':
            //             sh 'npm run test:safari'
            //             break
            //         default:
            //             sh 'npm test'
            //     }
            // }
            steps{
                sh 'npm run test:chrome'
            }
        }
    }
}