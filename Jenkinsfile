pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'bahdemomonolith:latest'
    }

    stages {
        stage('Checkout Source Code') {
            steps {
                // Checking out code from a Git repository
                git url: 'https://github.com/deammanickam/bahdemo-monolith.git/', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                script {
                    bat 'gradlew bootJar' // Windows batch command for building the project
                }
            }
        }

        stage('Static Code Analysis') {
           steps {
                script {
                    bat 'echo hello word'
                   // Assuming SonarQube is set up for Gradle
                   // bat 'gradlew -Pprod -x webapp_test check jacocoTestReport sonar -Dsonar.host.url=http://localhost:9001'
                }
            }
        }

        stage('E2E Tests') {
            steps {
                script {
                    bat 'echo e2e'
                  //  bat 'gradlew e2e' // Run end-to-end tests configured in your Gradle build
                }
            }
        }


        stage('Build Docker Image') {
            steps {
                script {
                    bat 'gradlew -Pprod jibDockerBuild'
                }
            }
        }


        stage('Scan for CVEs') {
            steps {
                // Example: Using a generic script for scanning
                // Replace with specific commands if you use a specific tool
                bat 'echo docker scan %DOCKER_IMAGE%'
            }
        }

        stage('Run Docker Image') {
            steps {
                script {
                    bat 'startDocker'
                }
            }
        }
    }

    post {
        always {
            // Clean up post-build, stop container, etc.
            bat 'docker stop bah-demo-monolith'
            bat 'docker rm bah-demo-monolith'
            echo 'Pipeline has completed'
        }
    }
}
