Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import { faker } from "@faker-js/faker";
import "cypress-real-events";
//import cypress = require("cypress");

//Login com sucesso
Cypress.Commands.add(
  "LoginSucesso",
  (
    username = Cypress.env("USER_EMAIL"),
    password = Cypress.env("USER_PASSWORD")
  ) => {
    cy.visit("/");
    cy.contains("a", "Login").click("center");
    cy.get('input[id="user"]').type(username, { log: false });
    cy.get('input[id="password"]').type(password, { log: false });
    cy.get("#btnLogin").click();
    cy.get(".swal2-confirm").click();
  }
);

//Login com Falha de senha errada
Cypress.Commands.add("LogiFalhaSenha", () => {
  cy.visit("/");
  cy.contains("a", "Login").click("center");
  cy.get('input[id="user"]').type("amandalimasiva@gmail.com", { log: false });
  cy.get('input[id="password"]').type("8521", { log: false });
  cy.get("#btnLogin").click();
  cy.get(".invalid_input").should("be.visible");
});

//Login com Falha de e-mail errado
Cypress.Commands.add(
  "LogiFalhaEmail",
  (password = Cypress.env("USER_PASSWORD")) => {
    cy.visit("/");
    cy.contains("a", "Login").click("center");
    cy.get('input[id="user"]').type("amandalimasiva@com", { log: false });
    cy.get('input[id="password"]').type(password, { log: false });
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("have.text", "E-mail inválido.");
  }
);

//Logout
Cypress.Commands.add(
  "RealizarLogout",
  (
    username = Cypress.env("USER_EMAIL"),
    password = Cypress.env("USER_PASSWORD")
  ) => {
    cy.visit("/");
    cy.contains("a", "Login").click("center");
    cy.get('input[id="user"]').type(username, { log: false });
    cy.get('input[id="password"]').type(password, { log: false });
    cy.get("#btnLogin").click();
    cy.get(".swal2-confirm").click();

    //cy.get('#userLogged').click();
    //cy.contains('a', ' Logout').click();
    cy.get(".nav > :nth-child(6) > a").click();
    cy.get("#swal2-title").should("have.text", "Logout Sucessfull");
    cy.get(".swal2-confirm").click();
  }
);

//Adicionando novo usuário válido
Cypress.Commands.add("usuarioValido", () => {
  cy.contains("a", "Cadastro").click("center");
  cy.contains("h3", "Cadastro de usuário").should("be.visible");

  const user = {
    name: "Amanda LS",
    email: faker.internet.email(),
    password: "pwqwe583",
  };

  cy.get("#user").type(user.name);
  cy.get("#email").type(user.email);
  cy.get("#password").type(user.password);
  cy.get("#btnRegister").click();
  cy.get(".swal2-popup").should("be.visible");
  cy.get(".swal2-popup").find("#swal2-title");
  cy.get(".swal2-confirm").click();
});

//Adicionando novo usuário inválido
Cypress.Commands.add("usuarioInvalido", () => {
  cy.contains("a", "Cadastro").click("center");
  cy.contains("h3", "Cadastro de usuário").should("be.visible");

  const user = {
    name: "Amanda LS",
    email: 'amanda.com',
    password: "pwqwe583",
  };

  cy.get("#user").type(user.name);
  cy.get("#email").type(user.email);
  cy.get("#password").type(user.password);
  cy.get("#btnRegister").click();
  cy.get("span[id='errorMessageFirstName']").should('be.visible')
})

Cypress.Commands.add("senhaInvalida", () => {
  cy.contains("a", "Cadastro").click("center");
  cy.contains("h3", "Cadastro de usuário").should("be.visible");

  const user = {
    name: "Amanda LS",
    email: faker.internet.email(),
    password: "12",
  };

  cy.get("#user").type(user.name);
  cy.get("#email").type(user.email);
  cy.get("#password").type(user.password);
  cy.get("#btnRegister").click();
  cy.get("span[id='errorMessageFirstName']").should('be.visible')
})



//Adicionando usuário já duplicado - O site está com bug
/*
Cypress.Commands.add("usuarioDuplicado", () => {
  cy.contains("a", "Cadastro").click("center");
  cy.contains("h3", "Cadastro de usuário").should("be.visible");

  const user = {
    name: "Amanda LS",
    email: 'amandalimasiva2@gmail.com',
    password: "pwqwe583",
  };

  cy.get("#user").type(user.name);
  cy.get("#email").type(user.email);
  cy.get("#password").type(user.password);
  cy.get("#btnRegister").click();
  //cy.get("span[id='errorMessageFirstName']").should('be.visible')
})
*/

//Adicionando produtos ao carrinho
Cypress.Commands.add("addNovosProdutos", () => {
  cy.contains("a", "Shop", { timeout: 7000 })
    .realClick()
    .then(() => {
      cy.contains("li", "Product Single").click({ waitForAnimations: false });
    });

  cy.contains("h3", "Green Dress For Woman").should("be.visible");
  cy.get("a[class*=btn_sm]").click();
  cy.get("#swal2-title").should("have.text", "Success!");

});

//Removendo produto do carrinho
Cypress.Commands.add("removerProdutos", () => {
  cy.contains(".item-count", "3").click();
  cy.get(
    ".offcanvas-cart > :nth-child(1) > .text-right > .offcanvas-wishlist-item-delete > .fa"
  ).click();
});
