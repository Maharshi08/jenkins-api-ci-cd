pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Start Server') {
            steps {
                echo 'Starting the app...'
                sh 'nohup npm start & sleep 5' // Start the server in background and wait for it to be ready
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment step (placeholder)'
            }
        }
    }
}
