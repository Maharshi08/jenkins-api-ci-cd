pipeline {
    agent any

    environment {
        IMAGE_NAME = "maharshi86/jenkins-api-ci-cd"
    }

    tools {
        nodejs "NodeJS 18" // only if you have NodeJS installed as a Jenkins tool
    }

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
                sh 'npm test || true'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                sh "docker build -t $IMAGE_NAME ."
            }
        }

        stage('Docker Login & Push') {
            steps {
                echo 'Logging in and pushing to Docker Hub...'
                withCredentials([usernamePassword(credentialsId: '85ad7d45-9efa-482f-b498-3f48c0321b26', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                    sh "docker push $IMAGE_NAME"
                }
            }
        }
    }
}
