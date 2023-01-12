//import cypress = require("cypress");

describe("Adicionando produto no carrinho", () => {
  before(() => {
    cy.visit("/");
    cy.title().should("eq", "QAZANDO Shop E-Commerce");
    cy.LoginSucesso()
  });
  it("Adicionado novos produtos ao carrinho", () => {
    cy.addNovosProdutos();
    //cy.addProdutosDuplicados()
  });
});