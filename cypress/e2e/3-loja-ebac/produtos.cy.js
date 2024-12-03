/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            //.first()
            //.last()
            //.eq(2)
            .contains('Arcadio Gym Short')
            .click()
            cy.get('#tab-description > :nth-child(1)').should ('contain', 'The Arcadio Gym short is a basic-looking')
            
    });
});