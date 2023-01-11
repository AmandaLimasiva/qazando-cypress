///reference types="cypress" />

describe("Cadastro de usuário", () => {
  before(() => {
    cy.visit("/");
    cy.title().should("eq", "QAZANDO Shop E-Commerce");
  });
  it("Cadastrar novo usuário válido", () => {
    cy.CadastrarNovoUsuario();
  });
});
