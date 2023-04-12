#!/usr/bin/env groovy

node {
    
    stage("Modelo de Jenkinsfile"){
        
            echo "====++++executing A++++===="
            sh '''
                docker ps -a
            '''
        
        
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