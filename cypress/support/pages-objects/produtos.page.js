class  ProdutosPage{

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProdutos(nomeProduto) {
        cy.get ('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.product-block')
        .contains(nomeProduto)
        .click()
            
    }

    visitarProduto(nomeProduto) {
        //cy.visit(`produtos/${nomeProduto}`)
        const urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)

    }

    addProdutoCarrinho(tamanho, cor, quantidade) {
        cy.get('.button-variable-item-' + tamanho).click({ force: true }).click({ force: true }).click({ force: true })
        cy.get(`.button-variable-item-${cor}`).click({ force: true })
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click({ force: true })
    }


}

export default new ProdutosPage()
