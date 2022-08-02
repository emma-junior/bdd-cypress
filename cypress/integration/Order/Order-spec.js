/// <reference types="cypress" />
import { orderObj } from "../../support/page-objects/order";
const order = new orderObj()

Given("I have logged in", () => {
  cy.login();
});
When("I click stage orders page", () => {
  order.enterOrderPage().click().wait(5000);
});

When("I select Whatsapp", () => {
  order.selectChannel().select('Whatsapp');
});

When("I Type customer", () => {
    order.typeCustomer().type("PaschalCustomer");
});
And("I enter customer", () => {
    order.enterCustomer().click()
});
Then("It should be filtered by my search", () => {
    order.searchedCustomer().should("be.visible");
});

When("I select open", () => {
    order.selectStatus().select('Open').wait(5000);
})
Then("It should be filtered by open status", () => {
  order.openStatus().should("be.visible");
});
When("I select Accepted", () => {
  order.selectStatus().select("Accepted", {force: true}).wait(5000);
});
Then("It should be filtered by Accepted status", () => {
    order.AcceptedStatus().should("be.visible");
});
When("I select Expired", () => {
  order.selectStatus().select("Expired", {force: true}).wait(5000);
});
Then("It should be filtered by Expired status", () => {
  order.ExpiredStatus().should("be.visible");
});
// When("I select Cancelled", () => {
//   order.selectStatus().select("Cancelled", {force: true}).wait(5000);
// });
// Then("It should be filtered by Cancelled status", () => {
//   order.CancelledStatusValidation().should("be.visible");
// });

When("I search for Request Id", () => {
  order.searchInput().type("TRQ1035724", {force: true}).wait(5000).clear()
});
Then("It should be filtered by Request Id", () => {
  order.requestId().should("be.visible")
});
When("I search for customer", () => {
  order.searchInput().type("biggy limited", {force: true}).wait(5000)
});
Then("It should be filtered by customer", () => {
  order.customer().should("be.visible");
});

When("I click on Container", () => {
  order.Container().click().wait(5000)
});
Then("It should be moved to Container", () => {
  order.ContainerValidation().should("be.visible")
});
When("I click on bulk", () => {
  order.Bulk().click().wait(5000)
})
Then("It should be moved to bulk", () => {
  order.BulkValidation().should("be.visible");
})
When("I click on Regular", () => {
  order.Regular().click().wait(5000);
});
Then("It should be moved to regular", () => {
  order.RegularValidation().should("be.visible");
});