/// <reference path="../support/commands.js" />

it('Realizar Login com sucesso', () => {
  cy.login(
    Cypress.env('USER_EMAIL'),
    Cypress.env('USER_PASSWORD')
  )
})