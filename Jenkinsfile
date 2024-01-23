pipeline{
    agent{
        docker{
            image 'mcr.microsoft.com/playwright:v1.40.1-local'
        }
    }
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
                sh 'npm run test:chrome'
            }
        }
    }
}