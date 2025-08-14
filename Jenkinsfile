pipeline {
    agent any

    environment {
        // Desabilita instalação automática pelo npm
        CYPRESS_INSTALL_BINARY = "0"
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
                        
                        // Instalação específica do Cypress
                        bat 'npx cypress install --force'
                    } catch (e) {
                        // Fallback: instala versão mais recente
                        echo "Falha na instalação, tentando versão mais recente..."
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
