/// <reference types="cypress"/>

describe ('Funcionalidade: Login',() => {
    it ('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/edit-account/')
        cy.get('#username').type('leo.teste@teste.com.br')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, leo.teste-2675 (não é leo.teste-2675? Sair)')
    })
})