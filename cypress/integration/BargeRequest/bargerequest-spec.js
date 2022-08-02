/// <reference types="cypress" />
import { bargeRequestObj } from "../../support/page-objects/bargerequest";
const bargeRequest = new bargeRequestObj();

When("I click barge Request page", () => {
  bargeRequest.enterBargereqPage().click().wait(2000);
});
And("I search for a barge request", () => {
  bargeRequest.searchBargeList().type("REQ1030249").wait(2000);
});
Then("A pending barge req displayed", () => {
  bargeRequest.pendingBargereq().should("be.visible");
});
When("I click on a barge list", () => {
  bargeRequest.clickBargeList().click({ force: true });
});
Then("I should be taken to barge detail page", () => {
  bargeRequest.bargeDetail().should("be.visible");
});
When("I type for container id", () => {
  bargeRequest.cargoInfoSearch().type("4343545454").wait(2000).clear();
});
Then("It should be filtered by container id", () => {
  bargeRequest.containerId().should("be.visible");
});
When("I click on the cancel button", () => {
  bargeRequest.clickCancel().click({ force: true });
});
Then("I should move to the barge request list page", () => {
  bargeRequest.bargeReqPage().should("be.visible");
});
When("I click on view trips", () => {
  bargeRequest.clickViewTrips().click().wait(2000);
});
Then("I should see the barge trips or no trips found", () => {
  cy.get(".content-wrap").then(($body) => {
    console.log($body.text().includes("Pending"));
    if ($body.text().includes("No Trips Found") == true) {
      cy.get("h2").contains("No Trips Found").should("be.visible");
    } else if ($body.text().includes("Pending") == true) {
      cy.get(".barge-status").contains(" Pending ").should("be.visible");
    }
  });

  //   cy.get(".table-area").then((body) => {
  //     if (body.find("h2:contains(No trips found)").length > 0)
  //       cy.get("h2").contains("No Trips Found").should("be.visible");
  //   });
  //   cy.get(".table-container").then((table) => {
  //     if (table.find("th:contains( Trip Id / Date )").length > 0)
  //       cy.get(".mat-header-row > .cdk-column-tripId").should("be.visible");
  //   });
});
And("I type in a request id", () => {
  bargeRequest.searchInput().type("req1035580").wait(3000).clear();
});
Then("It should be filtered by request id", () => {
  bargeRequest.requestId().should("be.visible");
});
