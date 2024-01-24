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
                        echo "you have selected chrome browser"
                    }
                    if(params.browser == 'Firefox'){
                        echo "you have selected firefox browser"
                    }
                    if(params.browser == 'Safari'){
                        echo "you have selected safari browser"
                    }
                    if(params.browser == 'All'){
                        echo "you have selected all browsers"
                    }
                }
            }
        }
    }
}