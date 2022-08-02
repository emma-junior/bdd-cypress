/// <reference types="cypress" />
import { bargesObj } from "../../support/page-objects/barges";
const barges = new bargesObj()

When("I click barges in sidebar", () => {
    barges.enterBargesPage().click();
});
And("I click on a barge", () => {
    barges.clickOnBarge().click();
});
Then("I should move into a barge details page", () => {
    barges.bargeDetails().should("be.visible");
});
When("I click on add barge schedule", () => {
    barges.addBargeSchedule().click();
});
And("I select a terminal", () => {
    barges.typeTerminal().type("five star")
    barges.selectTerminal().click();
});
And("I select Date", () => {
    barges.dateIcon().click();
    barges.nextMonth().click();
    barges.selectDate().click();
});
And("I select FROM", () => {
    barges.selectFrom().select("3600000");
});
And("I select TO", () => {
    barges.selectTo().select("12600000");
});
And("I click the add schedule button", () => {
    barges.addScheduleBtn().click();
});
Then("Barge schedule should be added", () => {
    barges.bargeSchedule().should("be.visible");
});

When("I select tug", () => {
    barges.typeInTug().type("brielle");
    barges.clickOnTug().click();
});
And("I click the match with barge button", () => {
    barges.matchBtn().click();
});
Then("It should be matched", () => {
    barges.TugMatched().should("be.visible");
});

When("I click on the activate and disable button", () => {
    barges.activeAndDisableBtn().click();
});
Then("It should be disabled", () => {
    barges.disabled().should("be.visible");
});
Then("It should be activated", () => {
    barges.activated().should("be.visible");
});

When("I click on view trips", () => {
    barges.viewTripsBtn().click();
});
Then("I should see trips if any and no trips found if there isn't", () => {
  cy.get(".content-wrap").then(($body) => {
    console.log($body.text().includes("Pending"));
    if ($body.text().includes("No Trips Found") == true) {
      barges.NoTrips().should("be.visible");
    } else if ($body.text().includes("Pending") == true) {
      barges.TripsFound().should("be.visible");
    }
  });
});
And("I search for a barge list", () => {
    barges.searchInput().type("TVGHHCD").wait(3000).clear();
});
Then("It should be filtered by my search", () => {
    barges.searchDisplayed().should("be.visible");
});
And("I click on view trips in barge list", () => {
    barges.viewTripsBargeLi().click();
});