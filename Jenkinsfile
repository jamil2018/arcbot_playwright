pipeline{
    agent any
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
                sh 'sudo npx playwright install-deps'
            }
        }
        stage('Run Tests'){
            steps{
                sh '''
                    npm run test:chrome
                '''
            }
        }
    }
}