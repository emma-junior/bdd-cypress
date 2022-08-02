/// <reference types="cypress" />
import { customerdetailsObj } from "../../support/page-objects/customerdetails";
const customerdetails = new customerdetailsObj

When("I click customer in sidebar", () => {
    customerdetails.enterCustomerPage().click().wait(3000);
});
And("I click on a customer", () => {
    customerdetails.clickOnACustomer().click({force: true});
});
Then("I should move into the customer details page", () => {
  customerdetails.customerDetailsPage().should("be.visible");
});
When("I click on the edit in general information", () => {
    customerdetails.generalInfoEdit().click();
});
And("I edit business name", () => {
    customerdetails.typeBusinessName().clear({force: true}).type("emma");
});
And("I select country", () => {
    customerdetails.selectCountry().select("nigeria", {force: true});
});
And("I edit registeration No", () => {
  customerdetails.editRegNo().clear({force: true}).type("reg 4321");
});
And("I edit location", () => {
    customerdetails.typeLocation().clear({force: true}).type("surulere, lagos, nigeria", {force: true}).wait(3000);
    customerdetails.enterLocation().click({force: true});
})
And("I edit tax number", () => {
    customerdetails.editTaxNo().clear({force: true}).type("tin54321");
});
And("I click on the save icon in general information", () => {
  customerdetails.generalInfoSave().click();
});
Then("General information should be editted successfully", () => {
    customerdetails.generalInfo().should("be.visible");
});
When("I click on add account", () => {
    customerdetails.clickAddAccount().click();
});
And("I enter business account description", () => {
    customerdetails.typeBusinessAccDesc().type("emma");
});
And("I click on the submit button", () => {
  customerdetails.businessAccSubmit().click();
});
Then("business account should be added", () => {
  customerdetails.businessAcc().should("be.visible");  
});
When("I click on the edit button in bank configuration", () => {
    customerdetails.bankConfigEdit().click();
});
And("I select country in bank configuration", () => {
    customerdetails.selectBankCountry().select("nigeria", {force: true});
});
And("I select bank name", () => {
    customerdetails.selectBankName().select("5: Object", {force: true});
})
And("I click on the save icon in bank configuration", () => {
    customerdetails.bankConfigSave().click().wait(3000);
});
Then("Bank configuration should be editted successfully", () => {
  customerdetails.bankConfiguration().should("be.visible");
});
When("I upload the image", () => {
  const filePath = "john.jpg";
  customerdetails.uploadImage().attachFile(filePath);
});
Then("It should be uploaded", () => {
  customerdetails.imageUploaded().should("be.visible");
});
When("I click on the plus icon", () => {
    customerdetails.clickPlusIcon().click({force: true});
});
And("I enter email", () => {
    customerdetails.enterContactEmail().type("emma@gmail.com");
});
And("I enter phone No", () => {
  customerdetails.enterContactPhoneNo().type("08064523490");
});
And("I click on add contact", () => {
    customerdetails.reqChannelSubmit().click();
});
Then("Contact should be added successfully", () => {
    customerdetails.requestChannel().should("be.visible");
});
When("I click on a contact edit in request channel", () => {
    customerdetails.clickOnaContactEdit().click();
});
And("I edit email", () => {
    customerdetails.editContactEmail().clear({force: true}).type("junior@gmail.com");
});
And("I edit phone No", () => {
    customerdetails.editContactPhoneNo().clear().type("07053586835");
});
And("I click on update contact", () => {
    customerdetails.editContactSubmit().click();
});
Then("Contact should be updated successfully", () => {
    customerdetails.contactEditted().should("be.visible");
});
When("I click on a contact delete icon in request channel", () => {
    customerdetails.contactDeleteIcon().click();
});
And("I confirm delete on request channel", () => {
    customerdetails.confirmContactDelete().click();
})
Then("Contact should be deleted", () => {
    customerdetails.contactDeleted().should("be.visible");
});
When("I click on the activate and deactivate button", () => {
    customerdetails.activateAndDeactivate().click();
});
And("I click the ok button", () => {
    customerdetails.confirmActivateAndDeactive().click();
});
Then("Account should be deactivated", () => {
    customerdetails.inactive().should("be.visible");
});
Then("Account should be activated", () => {
    customerdetails.active().should("be.visible");
});

When("I click on manage users", () => {
    cy.get("a").invoke("removeAttr", "target");
    customerdetails.manageUsersLink().click();    
});
Then("I should be taken to the customers user management page", () => {
    customerdetails.customersUsers().should("be.visible");
});
When("I click on a trip report activate and deactivate button", () => {
    customerdetails.tripReportToggleBtn().click({force: true});
});
Then("The user truck report should be activated", () => {
    customerdetails.tripReportActive().should("be.visible");
});
Then("The user truck report should be deactivated", () => {
    customerdetails.tripReportInactive().should("be.visible");
});