//import cypress = require("cypress");

describe("Carrinho de Compras", () => {
  before(() => {
    cy.visit("/");
    cy.title().should("eq", "QAZANDO Shop E-Commerce");
    cy.LoginSucesso()
  });
  it("Adicionado novos produtos ao carrinho", () => {
    cy.addNovosProdutos();
    cy.RealizarLogout()
  });

  it('Removendo produtos do carrinho', () => {
    cy.removerProdutos()
    cy.RealizarLogout()
  })
});