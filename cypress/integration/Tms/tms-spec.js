/// <reference types="cypress" />

import { tmsObj } from "../../support/page-objects/tms";
const tms = new tmsObj();
import { When, And, Then } from "cypress-cucumber-preprocessor/steps";

When("I click tracker management in sidebar", () => {
  tms.enterTmsPage().click();
});
Then("I should move into the tracker management page", () => {
  tms.tmsPage().should("be.visible");
});
When("I click on the store button", () => {
  tms.clickStore().click({ force: true });
});
Then("User should be moved to the store tab", () => {
  tms.store().should("be.visible");
});
And("Tracker inventory ID column should be visible", () => {
  tms.trackerID().should("be.visible");
});
And("Tracker Provider column should be visible", () => {
  tms.trackerProvider().should("be.visible");
});
And("Tracker imei column should be visible", () => {
  tms.trackerImei().should("be.visible");
});
And("Store location column should be visible", () => {
  tms.storeLocation().should("be.visible");
});
And("Status column should be visible", () => {
  tms.status().should("be.visible");
});
Then("in-store Date column should be visible", () => {
  tms.inStoreDate().should("be.visible");
});
And("Tracker msisdn column should be visible", () => {
  tms.trackerMsisdn().should("be.visible");
});

And("I click on the check box of a tracker in tracker list", () => {
  tms.storeCheckBox().click({ force: true });
});
Then("The Update Status button should be visible", () => {
  tms.updateStatusBtn().should("be.visible");
});
When("I Click on the update status button", () => {
  tms.updateStatusBtn().click();
});
Then("An update Status modal should appear", () => {
  tms.updateStatusModal().should("be.visible");
});
When("I select dispatch", () => {
  tms.selectStatus().select("Dispatched");
});
Then("A dropdown with some input fields should appear", () => {
  tms.dropdownAfterSelStatus().should("be.visible");
});
When("I select field officer", () => {
  tms.typeFieldOfficer().type("paschal").wait(2000);
  tms.enterFieldOfficer().click();
});
And("I select business unit", () => {
  tms.selectBusinessUnit().select("Apapa Unit");
});
And("I click on update status", () => {
  tms.UpdateStatus().click();
});
Then("Tracker status should be updated", () => {
  tms.statusUpdated().should("be.visible");
});
Then("Tracker status should be updated from decommissioned", () => {
  tms.statusUpdated().should("be.visible");
});
When("I click on the field button", () => {
  tms.clickField().click({ force: true });
});
Then("User should be moved to the field tab", () => {
  tms.field().should("be.visible");
});
And("Field officer column should be visible", () => {
  tms.fieldOfficer().should("be.visible");
});
And("Current location column should be visible", () => {
  tms.currentLocation().should("be.visible");
});
And("Dispatched Date column should be visible", () => {
  tms.dispatchedDate().should("be.visible");
});
Then("Recieved Date column should be visible", () => {
  tms.recievedDate().should("be.visible");
});
When("I select decommissioned", () => {
  tms.selectStatus().select("Decommissioned");
});
When("I select store location", () => {
  tms.selectStoreLocation().select("Lagos island, nigeria");
});
And("I select reason", () => {
  tms.selectReason().select("Faulty");
});
And("I enter additional info", () => {
  tms.additionalInfo().type("For automation testing");
});
When("I click on the decommissioned button", () => {
  tms.clickDecommissioned().click({ force: true });
});
And("User should be moved to the decommissioned tab", () => {
  tms.decommissioned().should("be.visible");
});
And("Decommissioned reason column should be visible", () => {
  tms.decommissionedReason().should("be.visible");
});
And("Decommissioned by column should be visible", () => {
  tms.decommissionedBy().should("be.visible");
});
Then("Decommissioned Date column should be visible", () => {
  tms.decommissionedDate().should("be.visible");
});
When("I select lost", () => {
  tms.selectStatus().select("Lost");
});
Then("A dropdown for lost info field should appear", () => {
  tms.ddAfterSelStatusInDecNLost().should("be.visible");
});
When("I enter lost info", () => {
  tms.enterLostInfo().type("For testing");
});
When("I click on the lost button", () => {
  tms.clickLost().click({ force: true });
});
And("User should be moved to the lost tab", () => {
  tms.lost().should("be.visible");
});
And("Lost info column should be visible", () => {
  tms.lostInfo().should("be.visible");
});
Then("Lost Date column should be visible", () => {
  tms.lostDate().should("be.visible");
});
When("I select restore", () => {
  tms.selectStatus().select("Restore");
});
Then("A dropdown for store location field should appear", () => {
  tms.ddAfterSelStatusInDecNLost().should("be.visible");
});
When("I click on the rent button", () => {
  tms.clickRent().click({ force: true });
});
And("User should be moved to the rent tab", () => {
  tms.rent().should("be.visible");
});
And("Date created column should be visible", () => {
  tms.dateCreated().should("be.visible");
});
Then("Actions column should be visible", () => {
  tms.actions().should("be.visible");
});
And(
  "I click on the tracker detail icon in the action column of a tracker",
  () => {
    tms.trackerDetailIcon().click({ force: true });
  }
);
And("I moved into the tracker detail page", () => {
  tms.trackerDetail().should("be.visible");
});
Then("I should be able to view tracker info", () => {
  tms.trackerInfo().should("be.visible");
});
When("I click the back button", () => {
  tms.backBtn().click();
});
When("I type in my search", () => {
  tms.search().type("blessing").wait(2000).clear();
});
Then("It should be filtered by my search", () => {
  tms.searchValidated().should("be.visible");
});
When("I click on the add tracker button", () => {
  tms.addTrackerBtn().click();
});
And("I select Provider", () => {
  tms.selectProvider().select("Test");
});
And("I select store location to add tracker", () => {
  tms.addStoreLocation().select("62bed4d62187c6001d678076");
});
And("I select tracker type", () => {
  tms.selectTrackerType().select("Wireless");
});
And("I select ownership", () => {
  tms.selectOwnership().select("Kobo360");
});
And("I enter imei number", () => {
  tms.enterImeiNumber().type("1234566");
});
And("I enter msisdn number", () => {
  tms.enterMsisdn().type("5656");
});
And("I click on the save tracker button", () => {
  tms.saveTrackerBtn().click();
});
Then("Tracker should be added", () => {
  cy.get(".main").then(($body) => {
    console.log($body.text().includes("Tracker added successfully"));
    if ($body.text().includes("Tracker added successfully") == true) {
      tms.trackerAdded().should("be.visible");
    } else if (
      $body.text().includes(" Tracker already exist in database ") == true
    ) {
      tms.trackerAlreadyAdded().should("be.visible");
    }
  });
});
And("I click on the all filters button", () => {
  tms.allFilterButton().click();
});
Then("A select store category modal should come up", () => {
  tms.storeCategory().should("be.visible");
});
And("I click on the apply button", () => {
  tms.filterApplyBtn().click();
});
Then("Tracker should be filtered by the selected Tracker provider", () => {
  tms.providerFiltered().should("be.visible");
});
When("I select store location to filter", () => {
  tms.addStoreLocation().select("Kobo 360 Building, Surulere, nigeria");
});
Then("Tracker should be filtered by the selected store location", () => {
  tms.storeLocationFiltered().should("be.visible");
});
When("I reset the filters", () => {
  cy.get(".mid-info").then(($body) => {
    console.log($body.text().includes("Reset"));
    if ($body.text().includes("Reset") == true) {
      tms.resetBtn().click();
    } else if ($body.text().includes("Clear") == true) {
      cy.get(".task-btn").click();
    }
  });
});
When("I select Status to filter", () => {
  tms.filterStatus().select("In-store");
});
Then("Tracker should be filtered by the selected Status", () => {
  tms.statusFiltered().should("be.visible");
});
