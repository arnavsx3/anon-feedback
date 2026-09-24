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