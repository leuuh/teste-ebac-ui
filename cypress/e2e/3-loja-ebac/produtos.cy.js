/// <reference types="cypress"/>
import produtosPage from "../../support/pages-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
            cy.get('#tab-title-description > a').should('exist')    
            
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Rocco Gym Tank'
        produtosPage.buscarProdutos(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 5;
        produtosPage.buscarProdutos('Atomic Endurance Running Tee (Crew-Neck)');
        produtosPage.addProdutoCarrinho('L', 'Black', qtd);
        cy.get('.woocommerce-message').should('include.text', `${qtd} × “Atomic Endurance Running Tee (Crew-Neck)” foram adicionados no seu carrinho.`)
      });

      it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados =>{

            produtosPage.buscarProdutos(dados[1].nomeProduto);
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho,
                dados[1].cor,
                dados[1].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
          });
        })


});