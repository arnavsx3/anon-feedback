@Library('my-shared-library') _

pipeline {

    agent any

    stages {

        stage("Code") {
            steps {
                code("https://github.com/arnavsx3/anon-feedback.git")
            }
        }

        stage("SonarQube") {
            agent {
                label "ec2-sonar"
            }
            steps {
                code("https://github.com/arnavsx3/anon-feedback.git")
                sonarScan("SonarQube-server", "anon-feedback")
            }
        }

        stage("Quality Gate") {
             steps {
                timeout(time: 10, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage("OSV Scanner") {
            agent {
                label "ec2-sonar"
            }
            steps {
                osvScan()
            }
        }

        stage("Build") {
            agent {
                label "ec2-sonar"
            }
            steps {
                buildDocker()
                sh 'docker compose pull nginx'
            }
        }

        stage("Trivy Image") {
            agent {
                label "ec2-sonar"
            }
            steps {
                trivyImageScan()
            }
        }

        stage("Deploy") {
            agent {
                label "ec2-sonar"
            }
            steps {
                injectEnv("anon-feedback-env")
                deploy()
            }
        }

    }
}