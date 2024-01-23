pipeline {
    agent any

    parameters {
        choice(choices: ['Chrome', 'Firefox', 'Safari'], description: 'Select the browser to run tests on', name: 'TEST_BROWSER')
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
        stage('Run Tests'){
            steps {
                switch("${params.TEST_BROWSER}") {
                    case 'Chrome':
                        sh 'npm run test:chrome'
                        break
                    case 'Firefox':
                        sh 'npm run test:firefox'
                        break
                    case 'Safari':
                        sh 'npm run test:safari'
                        break
                    default:
                        echo 'Invalid browser selected.'
                }
            }
        }
    }
}