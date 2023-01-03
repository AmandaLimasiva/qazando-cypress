//Login
Cypress.Commands.add("login", (
    username = Cypress.env("USER_EMAIL"),
    password = Cypress.env("USER_PASSWORD")
  ) => {
    cy.visit("/");
    cy.contains("a", "Login").click("center");
    cy.get('input[id="user"]').type(username, { log: false });
    cy.get('input[id="password"]').type(password, { log: false });
    cy.get('#btnLogin').click();
    cy.get('.swal2-confirm').click();

  }
);
