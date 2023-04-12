#!/usr/bin/env groovy

node {
    
    stage("Modelo de Jenkinsfile"){
        steps{
            echo "====++++executing A++++===="
            sh '''
                docker ps -a
            '''
        }
        post{
            always{
                echo "====++++always++++===="
            }
            success{
                echo "====++++A executed successfully++++===="
            }
            failure{
                echo "====++++A execution failed++++===="
            }
    
        }
    }
  
}