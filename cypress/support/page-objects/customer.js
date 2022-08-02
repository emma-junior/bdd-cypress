export class customerObj {
  enterCustomerPage() {
    return cy.get(":nth-child(8) > .sub-menu > :nth-child(1) > .menu-wrap");
  }
  clickAddCustomer() {
    return cy.get(".btn > .mat-focus-indicator");
  }
  clickCreateCustomer() {
    return cy.get(".btn > .mat-focus-indicator");
  }
  typeBusinessName() {
    return cy.get(".content > :nth-child(1) > .input-wrap > .ng-untouched");
  }
  selectCountry() {
    return cy.get("#country");
  }
  typeLocation() {
    return cy.get("#location");
  }
  typeCustomerAlias() {
    return cy.get(".content > :nth-child(5) > .input-wrap > .ng-untouched");
  }
  clickNext() {
    return cy.get('#cdk-step-content-0-0 > .step-action > [matsteppernext=""]');
  }
  contactFormValidation() {
    return cy
      .get(
        "#cdk-step-content-0-1 > .step-card > .card > .meta > .data > .title"
      )
      .contains("Contact person");
  }
  typeFirstName() {
    return cy.get(":nth-child(1) > .input-wrap > .ng-untouched");
  }
  typeLastName() {
    return cy.get(":nth-child(2) > .input-wrap > .ng-untouched");
  }
  typePhoneNo() {
    return cy.get(".input-wrap > .ng-star-inserted");
  }
  typeEmailAddress() {
    return cy.get(":nth-child(4) > .input-wrap > .ng-untouched");
  }
  typePassword() {
    return cy.get(":nth-child(5) > .input-wrap > .ng-untouched");
  }
  typeConfirmPassword() {
    return cy.get(":nth-child(6) > .input-wrap > .ng-untouched");
  }
  createCustomerBtn() {
    return cy.get(".step-action > .mat-raised-button");
  }
  customerCreated() {
    return cy.get(".main").contains("customer created");
  }
  customerAlreadyExist() {
    return cy
      .get(".main")
      .contains("Customer with the Business Name already exist");
  }
}
