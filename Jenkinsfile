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
            steps {
                sonarScan("SonarQube", "anon-feedback")
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