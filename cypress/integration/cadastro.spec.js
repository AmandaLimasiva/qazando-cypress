///reference types="cypress" />
import { faker } from "@faker-js/faker";

it("Realiza um cadastro", () => {
  cy.visit("/");
  cy.title().should("eq", "QAZANDO Shop E-Commerce");

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
