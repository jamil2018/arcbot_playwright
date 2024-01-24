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
                        sh 'npm run test:chrome'
                    }
                    if(params.browser == 'Firefox'){
                        sh 'npm run test:firefox'
                    }
                    if(params.browser == 'Safari'){
                        sh 'npm run test:safari'
                    }
                    if(params.browser == 'All'){
                        sh 'npm test'
                    }
                }
            }
        }
    }
}