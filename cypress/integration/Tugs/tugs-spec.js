/// <reference types="cypress" />
import { tugsObj } from "../../support/page-objects/tugs";
const tugs = new tugsObj()

When("I click tug in sidebar", () => {
    tugs.enterTugsPage().click();
});
And("I click on a tug", () => {
    tugs.clickOnTug().click();
});
Then("I should move into a tug details page", () => {
    tugs.tugDetails().should("be.visible");
});
When("I click on tug information edit button", () => {
    tugs.tugInfoEdit().click();
});
And("I edit tug name", () => {
    tugs.editTugName().clear().type("golden incb");
});
And("I click on the save icon in tug information", () => {
    tugs.tugInfoSave().click({force: true});
});
Then("Tug name should be editted successfully", () => {
    tugs.tugInfo().should("be.visible");
});

When("I click on crew information edit", () => {
    tugs.crewInfoEdit().click();
});
And("I edit captain name", () => {
    tugs.captainName().clear().type("emma junior");
});
And("I edit captain mobile", () => {
    tugs.captainMobileNo().clear().type("+234817687681");
});
And("I edit crew member one name", () => {
    tugs.crewMember1Name().clear().type("lanre");
});
And("I edit crew member one mobile", () => {
    tugs.crewMember1Mobile().clear().type("+234151765761");
})
And("I edit crew member two name", () => {
    tugs.crewMember2Name().clear().type("daniel");
});
And("I edit crew member two mobile", () => {
    tugs.crewMember2Mobile().clear().type("+2348061454280");
});
And("I click on the save icon in crew information", () => {
    tugs.crewInfoSave().click();
});
Then("Crew information should be editted successfully", () => {
    tugs.crewInfo().should("be.visible");
});
When("I upload the image", () => {
  const filePath = "john.jpg";
  tugs.uploadImage().attachFile(filePath);
});
Then("It should be uploaded", () => {
  tugs.imageUploaded().should("be.visible").wait(3000);
});
When("I search a customer", () => {
    tugs.clickCancel().click();
    tugs.tugSearch().type("goldengrace")
});
Then("My search should be displayed", () => {
    tugs.tugId().should("be.visible");
});