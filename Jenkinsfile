pipeline {
    agent { docker { image 'mcr.microsoft.com/playwright:v1.40.1-jammy' } }

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
                script{
                    currentBuild.displayName = 'E2E Functional Test'
                    if(params.browser == 'Chrome'){
                        currentBuild.description = 'Browser(s): Chrome'
                        sh 'npm run test:chrome'
                    }
                    if(params.browser == 'Firefox'){
                        currentBuild.description = 'Browser(s): Firefox'
                        sh 'npm run test:firefox'
                    }
                    if(params.browser == 'Safari'){
                        currentBuild.description = 'Browser(s): Safari'
                        sh 'npm run test:safari'
                    }
                    if(params.browser == 'All'){
                        currentBuild.description = 'Browser(s): Chrome, Firefox, Safari'
                        sh 'npm test'
                    }
                }
            }
        }
    }
}