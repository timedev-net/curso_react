#!/usr/bin/env groovy

node {
    stage('identifica a pasta') {
      sh 'pwd'
    }
    
    stage('Pegando o projeto do Repositorio remoto') {
      git branch: 'main', url: 'https://github.com/timedev-net/curso_react.git'
    }
    stage('verifica se tem coisa na pasta') {
      sh 'ls'
    }
    stage('Fazendo o build da imagem docker do projeto ') {
      sh 'docker build -t img_curso_react .'
    }
    stage('Parando o container antigo') {
      try {
        sh 'docker stop curso_react'
      }
      catch (exc) {
        echo 'Falha ao parar o container antigo!'
      }
    }
    stage('Removendo o container antigo') {
      try {
        sh 'docker rm curso_react'
      }
      catch (exc) {
        echo 'Falha ao parar o container antigo!'
      }
    }
    stage('Subindo o novo container docker da imagem criada') {
      sh 'docker run -d --network proxynetwork --domainname curso_react --restart always --name curso_react -p 3000:3000 img_curso_react'
    }

    // stage("Modelo de Jenkinsfile") {
    //     try {
    //         echo "==== executa os comandos ===="
    //         sh '''
    //             docker ps -a
    //         '''
    //     }
    //     catch (exception) {
    //         echo "==== deu erro ===="
    //     } finally {
    //         echo "==== terminou ===="
    //     }    
    // }

    // stage("outro estágio qualquer") {
    //     sh '''
    //         docker --version
    //     '''
    // }

}