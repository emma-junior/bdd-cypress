/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import {truckreqdetailsObj} from '../../support/page-objects/truckreqdetails'

const truckreqdetails = new truckreqdetailsObj()

When("I click stage Truck Request page", () => {
  truckreqdetails.enterTruckReqPage().click().wait(2000);
});
And("I select row", () => {
  truckreqdetails.enterARow().click({ force: true });
});
Then("User is taken to the page", () => {
  truckreqdetails.userIsTakenToNextPg().should("be.visible").wait(2000);
});

When("I click on edit", () => {
 truckreqdetails.enterEdit().click({ force: true });
});
And("I select show partner payout", () => {
 truckreqdetails.selectShowPartnerPayout().select("True", { force: true });
});
And("I select currency", () => {
 truckreqdetails.selectCurrency().select("GHS", { force: true });
})
And("I clear potential GTV", () => {
 truckreqdetails.clearPotentialGTV().clear();
});
And("I type potential GTV", () => {
 truckreqdetails.typePotentialGTV().type("0");
})
And("I click on the save icon", () => {
  truckreqdetails.clickOnSave().click();
})
Then("Other information should be editted", () => {
  truckreqdetails.validation().should("be.visible");
});

When("I click expiry date and time edit", () => {
  truckreqdetails.expiryDateAndTimeEdit().click();
});

And("I edit expiry date", () => {
  truckreqdetails.clickOnExpiryDateIcon().click({ multiple: true, force: true });
  truckreqdetails.selectExpiryDay().click({ multiple: true, force: true });
});
And("I edit ETA to supply date", () => {
  truckreqdetails
    .selectETAtoSupplyDate()
    .click({ multiple: true, force: true });
});
And("I click the save icon in expiry date and time", () => {
  truckreqdetails.expiryDateSaveIcon().click();
});
Then("Expiry date and time should be updated", () => {
  truckreqdetails.validation().should("be.visible");
});
When("I click route information edit", () => {
  truckreqdetails.routeInfoEdit().click();
});
And("I edit pickup station", () => {
  truckreqdetails.editPickupStation().clear({force: true}).type("funsho williams avenue").wait(3000);
  truckreqdetails.enterPickupStation().click();
});
And("I edit destination", () => {
  truckreqdetails.editDestination().clear({force: true}).type("kaduna international airport").wait(3000);
  truckreqdetails.enterDestination().click();
});
And("I click the save icon in route information", () => {
  truckreqdetails.routeInfoSave().click();
});
Then("Route information should be updated", () => {
  truckreqdetails.validation().should("be.visible");
});
When("I click on truck type edit", () => {
  cy.reload();
  truckreqdetails.truckTypeEdit().click();
});
And("I select truck type", () => {
  truckreqdetails.selectTruckType().select("Tipper", {force: true});
});
And("I select truck size", () => {
  truckreqdetails.selectTruckSize().select("28", {force: true});
});
And("I click on the save icon in truck type", () => {
  truckreqdetails.truckTypeSave().click();
});
Then("Truck type should be updated successfully", () => {
  truckreqdetails.validation().should("be.visible");
});

When("I click on business information edit", () => {
  truckreqdetails.businessInfoEdit().click();
});
And("I select business unit", () => {
  truckreqdetails.selectBusinessUnit().select("QA-BIZ", {force: true});
});
And("I select business account", () => {
  truckreqdetails.selectBusinessAcc().select("autoTest", {force: true});
});
And("I click the save icon in business information", () => {
  truckreqdetails.businessInfoSave().click();
});
Then("Business information should be updated", () => {
  truckreqdetails.validation().should("be.visible");
});