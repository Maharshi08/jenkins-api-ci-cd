pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test' // only if you have tests
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment step (placeholder)'
                // You can add deploy steps here
            }
        }
    }
}
