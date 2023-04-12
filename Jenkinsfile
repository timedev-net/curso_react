
pipeline {

    // agent any

    // environment {
    //     //Use Pipeline Utility Steps plugin to read information from pom.xml into env variables
        
    //     // VERSION = readMavenPom().getVersion()
    // }

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