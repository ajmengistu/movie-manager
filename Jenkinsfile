#!/usr/bin/env groovy

node {
    stage('checkout') {
        checkout scm
    }
        stage('check java') {
            sh "java -version"
        }
        
        stage('clean') {
            sh "./mvnw clean"
        }

        stage('backend tests') {
            try {
                sh "./mvnw clean verify"
            } catch(err) {
                throw err
            } finally {
                junit '**/target/test-results/**/TEST-*.xml'
            }
        }

        stage('frontend tests') {
            try {
                sh "npm run test"
            } catch(err) {
                throw err
            }
        }
}
