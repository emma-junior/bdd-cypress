/// <reference types="cypress" />
import { customerObj } from "../../support/page-objects/customer";
const customer = new customerObj();

When("I click the customer page in sidebar", () => {
  customer.enterCustomerPage().click();
});
And("I click on add customer", () => {
  customer.clickAddCustomer().click();
});
And("I click on create customer", () => {
  customer.clickCreateCustomer().click();
});
And("I type in Business name", () => {
  customer.typeBusinessName().type("Golden Inc");
});
And("I select country", () => {
  customer.selectCountry().select("Nigeria");
});
And("I type in location", () => {
  customer.typeLocation().type("surulere, Lagos, Nigeria");
});
And("I type in customer alias", () => {
  customer.typeCustomerAlias().type("chi_limited");
});
And("I click on the next button", () => {
  customer.clickNext().click();
});
Then("Validate user taken to contact person form", () => {
  customer.contactFormValidation().should("be.visible");
});
And("I type in first name", () => {
  customer.typeFirstName().type("Junior");
});
And("I type in last name", () => {
  customer.typeLastName().type("Ezeh");
});
And("I type in phone number", () => {
  customer.typePhoneNo().type("09025476821");
});
And("I type in email address", () => {
  customer.typeEmailAddress().type("ezejr@gmail.com");
});
And("I type in password", () => {
  customer.typePassword().type("Pass-23456");
});
And("I type in confirm password", () => {
  customer.typeConfirmPassword().type("Pass-23456");
});
And("I click on the create customer button", () => {
  customer.createCustomerBtn().click();
});
Then("Customer should be created successfully", () => {
  cy.get(".main").then(($body) => {
    console.log($body.text().includes("customer created"));
    if ($body.text().includes("customer created") == true) {
      customer.customerCreated().should("be.visible");
    } else if (
      $body.text().includes("Customer with the Business Name already exist") ==
      true
    ) {
      customer.customerAlreadyExist().should("be.visible");
    }
  });
});
