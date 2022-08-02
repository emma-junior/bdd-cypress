import "cypress-localstorage-commands";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
beforeEach(() => {
  cy.restoreLocalStorage();
});
before(() => {
  cy.login();
});
afterEach(() => {
  cy.saveLocalStorage();
});
let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

Cypress.Commands.add("login", () => {
  cy.visit(Cypress.config().baseUrl);
  const useremail = "emma@yopmail.com";
  const userpassword = "Emmanuel-3100";
  cy.get("[name=email]").type(useremail);
  cy.get("[name=secret]").type(userpassword);
  cy.contains("span", " Sign in ").click().wait(3000);
});

import "cypress-file-upload";
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
