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

        stage("Dependency Check") {
            agent {
                label "ec2-sonar"
            }
            steps {
                dependencyCheck("Owasp-dc", "nvd-api-key")
            }
        }

        stage("Build") {
            steps {
                buildDocker()
            }
        }

        stage("Test") {
            steps {
                test()
            }
        }

        stage("Deploy") {
            steps {
                injectEnv("anon-feedback-env")
                deploy()
            }
        }

    }
}