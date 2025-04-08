pipeline {
    agent any

    environment {
        IMAGE_NAME = 'quote-api'
        CONTAINER_NAME = 'quote-api-container'
        PORT = '3000'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Docker Run') {
            steps {
                echo 'Running Docker container...'
                sh '''
                    docker run -d --rm -p $PORT:$PORT --name $CONTAINER_NAME $IMAGE_NAME
                    sleep 5
                '''
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Cleanup') {
            steps {
                echo 'Stopping Docker container...'
                sh 'docker stop $CONTAINER_NAME || true'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up Docker containers if needed...'
            sh 'docker rm -f $CONTAINER_NAME || true'
        }
    }
}
