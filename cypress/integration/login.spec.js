/// <reference path="../support/commands.js" />

it('Realizar Login com sucesso', () => {
  cy.LoginSucesso()
})

it('Realizar Login com senha inválida', () =>{
  cy.LogiFalhaSenha()
})

it('Realizar Logout', () =>{
  cy.RealizarLogout()
})

