pipeline {
    agent any

    environment {
        // Configurações globais
        CYPRESS_INSTALL_BINARY = "0"  # Desabilita instalação automática pelo npm
    }

    stages {
        stage('Instalar dependências') {
            steps {
                script {
                    try {
                        // Limpeza e instalação de dependências
                        bat 'npm cache clean --force'
                        bat 'rmdir /s /q node_modules || exit 0'
                        bat 'npm install'
                        
                        // Instalação específica do Cypress com versão estável
                        bat 'npx cypress install --force'
                    } catch (e) {
                        // Fallback: tenta instalar uma versão mais recente
                        bat 'npm install cypress@latest --save-dev'
                        bat 'npx cypress install --force'
                    }
                }
            }
        }

        stage('Executar Testes') {
            steps {
                bat 'set NO_COLOR=1 && npx cypress run --browser chrome --headless'
            }
        }
    }
}
