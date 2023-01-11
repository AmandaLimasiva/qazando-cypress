import { faker } from "@faker-js/faker";

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

Cypress.Commands.add("CadastrarNovoUsuario", () => {
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
