///reference types="cypress" />


it('Realiza um cadastro', () => {
  cy.visit('/');
    cy.title().should('eq', 'QAZANDO Shop E-Commerce')

    cy.contains('a', "Cadastro")
      .click()

    cy.contains('h3', 'Cadastro de usuário')
        .should('be.visible')
})