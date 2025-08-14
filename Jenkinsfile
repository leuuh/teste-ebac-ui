pipeline {
    agent any

    stages {  // Você tinha esquecido este bloco 'stages' que engloba todos os estágios
        stage('Instalar dependências') {
            environment {
                CYPRESS_DOWNLOAD_MIRROR = "https://cdn.npm.taobao.org/dist/cypress"
            }
            steps {
                bat 'npm cache clean --force'
                bat 'rmdir /s /q node_modules || exit 0'
                bat 'npm install || npx cypress install --force'
            }
        }

        stage('Executar Testes') {
            steps {
                bat 'set NO_COLOR=1 && npx cypress run --browser chrome --headless'
            }
        }
    }
}
