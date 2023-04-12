
pipeline {

   node {
    
    stage('Fazendo o build da imagem docker do projeto ') {
      sh 'docker ps -a'
    }
    stage('Build and Publish Image') {
        when {
            branch 'main'  //only run these steps on the master branch
        }
        steps {
            sh """
                docker ps
                docker ps -a
                docker --version
            """
        }
    }
   }

    
}