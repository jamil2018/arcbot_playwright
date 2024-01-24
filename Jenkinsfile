pipeline {
    agent any

    parameters { 
        choice(name: 'browser', choices: ['All', 'Chrome', 'Firefox', 'Safari'], description: 'Select the Browser(s) to Run Tests') 
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
                switch("${params.browser}") {
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