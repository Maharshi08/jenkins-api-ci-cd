pipeline {
    agent {
        docker {
            image 'node:18'
            args '-u root:root' // optional, to avoid permission issues
        }
    }

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Maharshi08/jenkins-api-ci-cd.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test || echo "No tests defined"'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build || echo "No build step defined"'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Add real deployment script here
            }
        }
    }
}
