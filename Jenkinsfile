pipeline {
    agent any
      
    tools {nodejs "Node16"}
      
    stages {
          
      stage('Git') {
        steps {
          git 'https://github.com/chravi14/cemboo-backend/'
        }
      }
       
      stage('Install') {
        steps {
          sh 'npm install'
        }
      }
      
      stage("Linting") {
          steps {
              sh 'npm run lint'
          }
      }
      
      stage("Build") {
          steps {
              sh 'npm run build'
          }
      }
      
      stage("Post Build") {
          steps {
              sh '''#!/bin/bash
                  rm -rf *.tar.gz
                  echo "Preparing Artifacts"
                  tar czf cemboo_backend_build.tar.gz build node_modules package.json README.md
              '''
          }
      }
      
      stage("Deploy") {
          steps {
              sh '''#!/bin/bash
                  echo "Deploying Artifacts"
              '''
          } 
      }
    }
  }