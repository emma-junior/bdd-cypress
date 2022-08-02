/// <reference types="cypress" />
import { createTruckreqObj } from "../../support/page-objects/createtruckreq";
const createTruckreq = new createTruckreqObj

When("I click stage Truck Request page", () => {
  createTruckreq.enterTruckreqPage().click().wait(5000);
});
When("I click on create request", () => {
    createTruckreq.clickCreateTruckreq().click({force: true}).wait(5000);
});
And("I type customer", () => {
    createTruckreq.typeCustomer().type("paschalcustomer", {force: true}).wait(5000);
});
And("I enter the customer", () => {
  createTruckreq.enterCustomer().click().wait(5000);
});
And("I select business unit", () => {
  createTruckreq.selectBusinessUnit().select("Regression", {force: true}).wait(5000);
});
And("I select the type of truck i need", () => {
    createTruckreq.selectTypeOfTruck().click();
});
And("I click the next button", () => {
    createTruckreq.clickNext().click().wait(3000);
});
Then("I am taken to the business account info page", () => {
  createTruckreq.businessAccInfo().should("be.visible");
});
When("I select a business account info", () => {
  createTruckreq.typeOfBusiness().click().wait(5000);
})
And("I select business account", () => {
  createTruckreq.selectBusinessAcc().select("118").wait(2000);
})
And("I click the second next button", () => {
  createTruckreq.clickSecondNext().click();
});
Then("I am taken to where i can select truck type", () => {
  createTruckreq.truckType().should("be.visible");
})