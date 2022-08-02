import { partnerObj } from "../../support/page-objects/partner";
const partner = new partnerObj();

When("I enter partner page", () => {
  partner.enterPartnerPage().click();
});
And("I click on Add partner button", () => {
  partner.addPartnerButton().click();
});
And("I click on Create partner button", () => {
  partner.createPartnerButton().click();
});
And("I type in First name", () => {
  partner.enterFirstName().type("sarah");
});
And("I type in Last name", () => {
  partner.enterLastName().type("daniels");
});
And("I type in Email address", () => {
  partner.enterEmail().type("daniels@gmail.com");
});
And("I enter Business name", () => {
  partner.enterBusinessName().type("Champions ventures");
});
And("I enter Location", () => {
  partner.enterLocation().type("surulere, Lagos");
});
And("I type Phone number", () => {
  partner.enterPhoneNo().type("09034484683");
});
And("I type password", () => {
  partner.enterPartnerPassword().type("Pass-54321");
});
And("I click on the Add button", () => {
  partner.enterAddButton().click();
});
And("I add to transporter list", () => {
  partner.addToTransporterList().click();
});
Then("Partner should be added", () => {
  cy.get(".main").then(($body) => {
    console.log($body.text().includes("Successful"));
    if ($body.text().includes("Successful") == true) {
      partner.partnerAdded().should("be.visible");
      partner.confirmAdd().click();
    } else if (
      $body.text().includes("Truck Partner with the Name already exist") == true
    ) {
      partner.alreadyExist().should("be.visible");
    }
  });
});
