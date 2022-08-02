/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

Given("I have logged in", () => {
  cy.login();
});
And("I click stage Pretrip page", () => {
  cy.wait(3000);
//   cy.contains('Pre Trips').should("be.visible").click({force:true});
    cy.xpath("//span[contains(text(),'Pre Trips')]")
      .should("be.visible")
      .click({ force: true });
});
And("I click on add truck", () => {
  cy.get(".create > .mat-focus-indicator").click();
});
And("I select request type", () => {
  cy.get("#requestType").select("Regular", { force: true });
});
When("I search customer", () => {
  cy.get("#customer").type("chi", { force: true });
});
And("I enter customer", () => {
  cy.get("#mat-option-6 > .mat-option-text").click();
});
