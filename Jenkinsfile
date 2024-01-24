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
                script{
                    if(params.browser == 'Chrome'){
                        currentBuild.displayName = 'E2E Functional Test<Chrome>'
                        currentBuild.description = 'Browser(s): Chrome'
                        sh 'npm run test:chrome'
                    }
                    if(params.browser == 'Firefox'){
                        currentBuild.displayName = 'E2E Functional Test<Firefox>'
                        currentBuild.description = 'Browser(s): Firefox'
                        sh 'npm run test:firefox'
                    }
                    if(params.browser == 'Safari'){
                        currentBuild.displayName = 'E2E Functional Test<Safari>'
                        currentBuild.description = 'Browser(s): Safari'
                        sh 'npm run test:safari'
                    }
                    if(params.browser == 'All'){
                        currentBuild.displayName = 'E2E Functional Test<All>'
                        currentBuild.description = 'Browser(s): Chrome, Firefox, Safari'
                        sh 'npm test'
                    }
                }
            }
        }
    }
}