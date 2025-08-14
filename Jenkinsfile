pipeline {
    agent any

    stages {
        stage('Instalar dependências') {
            environment {
                // Usando o mirror oficial ao invés do Taobao (que está com certificado expirado)
                CYPRESS_DOWNLOAD_MIRROR = "https://cdn.cypress.io"
                // Desabilita verificação de certificado SSL se necessário
                NODE_TLS_REJECT_UNAUTHORIZED = "0"
            }
            steps {
                bat 'npm cache clean --force'
                bat 'rmdir /s /q node_modules || exit 0'
                bat 'npm install'
                // Instalação separada do Cypress com fallback
                bat 'npx cypress install || npx cypress install --force'
            }
        }

        stage('Executar Testes') {
            steps {
                bat 'set NO_COLOR=1 && npx cypress run --browser chrome --headless'
            }
        }
    }
}
