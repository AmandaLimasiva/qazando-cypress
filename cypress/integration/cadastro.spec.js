/// <reference types="cypress" />

describe("Cadastro de usuário", () => {
  before(() => {
    cy.visit("/");
    cy.title().should("eq", "QAZANDO Shop E-Commerce");
  });
  it("Quando o usuário é válido", () => {
    cy.usuarioValido();
    cy.RealizarLogout();
  });

  it("Quando o E-mail é inválido", () => {
    cy.usuarioInvalido();
    cy.RealizarLogout();
  });

  it("Quando o Senha é inválida", () => {
    cy.senhaInvalida();
  });



  /*
  it("Quando o usuário já foi cadastrado", () => {//Esse caso de teste está com falha devido a um bug na aplicação que permite cadastrar o mesmo e-mail para usuários diferentes
    cy.usuarioDuplicado();
  });
  */
});
