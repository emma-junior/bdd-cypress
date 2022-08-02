/// <reference types="cypress" />
import { driverdetailsObj } from "../../support/page-objects/driverdetails";
const driverdetails = new driverdetailsObj();

When("I click drivers in sidebar", () => {
  driverdetails.enterDriversPage().click({ force: true }).wait(1000);
});
And("I click on a driver", () => {
  driverdetails.clickADriver().click({ force: true });
});
Then("I should move into the driver details page", () => {
  driverdetails.driverDetailsPage().should("be.visible");
});
When("I click on the edit for driver information", () => {
  driverdetails.driverInfoEditBtn().click({ force: true });
});
And("I edit first name", () => {
  driverdetails.editFirstName().clear({ force: true }).type("John");
});
And("I edit last name", () => {
  driverdetails.editLastName().clear().type("cena");
});
And("I edit phone number", () => {
  driverdetails.editPhoneNo().clear().type("09075687162");
});
And("I click on the save icon in driver information", () => {
  driverdetails.saveDriverInfo().click().wait(1000);
});
Then("driver information should be editted successfully", () => {
  driverdetails.driverInfoEditted().should("be.visible");
});

When("I click on the edit for driver documents", () => {
  driverdetails.driverDocEditBtn().click();
});
And("I edit the license number", () => {
  driverdetails.editLicenseNo().clear().type("bond07");
});
And("I select expiry Date", () => {
  driverdetails.clickOnDateIcon().click().wait(1000);
  driverdetails.moveToNextMonth().click().wait(1000);
  driverdetails.selectDate().click();
});
And("I click on the save icon in driver document", () => {
  driverdetails.saveDriverDoc().click();
});
Then("driver document should be editted successfully", () => {
  driverdetails.driverDocEditted().should("be.visible");
});

When("I click on the edit for partner information", () => {
  driverdetails.partnerInfoEditBtn().click();
});
And("I edit partner business name", () => {
  driverdetails.typePartnersBusinessName().clear().type("tochukwu").wait(1000);
  driverdetails.enterPartnersBusinessName().click();
});
And("I click on the save icon in partner information", () => {
  driverdetails.savePartnersInfo().click();
});
Then("partner information should be editted successfully", () => {
  driverdetails.partnersInfo().should("be.visible");
});
When("I click on the activatedeactivate button", () => {
  driverdetails.activeAndDeactivate().click();
});
And("I click the ok button", () => {
  driverdetails.confirmActivateAndDeactive().click();
});
Then("account should be deactivated", () => {
  driverdetails.inactive().should("be.visible");
});
Then("account should be activated", () => {
  driverdetails.active().should("be.visible");
});
When("I click on the ussd toggle button", () => {
  driverdetails.ussdTrainingBtn().click();
});
Then("ussd training should be not trained", () => {
  driverdetails.UssdNotTrained().should("be.visible");
});
Then("ussd training should be trained", () => {
  driverdetails.ussdTrained().should("be.visible");
});
When("I click on the app training toggle button", () => {
  driverdetails.appTrainingBtn().click();
});
Then("app training should be trained", () => {
  driverdetails.appTrained().should("be.visible");
});
Then("app training should be not trained", () => {
  driverdetails.notAppTrained().should("be.visible");
});
When("I upload the image", () => {
  const filePath = "john.jpg";
  driverdetails.uploadImage().attachFile(filePath);
});
Then("It should be uploaded", () => {
  driverdetails.imageUploaded().should("be.visible");
});
