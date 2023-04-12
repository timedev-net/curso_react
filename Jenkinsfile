#!/usr/bin/env groovy

node {

    stage("Modelo de Jenkinsfile") {
        try {
            echo "==== executa os comandos ===="
            sh '''
                docker ps -a
            '''
        }
        catch (exception) {
            echo "==== deu erro ===="
        } finally {
            echo "==== terminou ===="
        }    
    }

    stage("outro estágio qualquer") {
        sh '''
            docker --version
        '''
    }
    
}