pipeline{
    agent any
    stages{
        stage('install dependencies'){
            steps{
                sh '''
                    npm install
                    npx playwright install
                '''
            }
        }
        stage('run tests on chrome'){
            steps{
                sh '''
                    npx playwright test --list
                    npm run test:chrome
                '''
            }
        }
    }
}