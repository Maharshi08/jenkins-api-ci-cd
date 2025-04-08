pipeline {
    agent any

    environment {
        IMAGE_NAME = "maharshi86/jenkins-api-ci-cd"
    }

    tools {
        nodejs "NodeJS 18" // Make sure this is configured in Jenkins
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
                // Start the server in the background and store the PID
                sh 'nohup npm start & echo $! > server.pid'
                // Give the server a few seconds to start
                sh 'sleep 5'
                // Run tests
                sh 'npm test'
            }
            post {
                always {
                    echo 'Stopping the server...'
                    sh 'kill $(cat server.pid) || true'
                }
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
