pipeline {
    agent any

    stages {
        stage('Clonar o repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/leuuh/teste-ebac-ui.git'
            }
        }
        stage('Instalar dependências') {
            steps {
                bat 'npm install'
            }
        }
        stage('Executar Testes') {
            steps {
                bat 'set NO_COLOR=1 && npx cypress run --browser chrome --headless'
            }
        }
    }
}
