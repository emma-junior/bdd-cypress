import {profileObj} from '../../support/page-objects/profile'
const profile = new profileObj();
// before(() => {
//   cy.login();
// });

Given("I have logged in", () => {
  cy.login();
});
When("I click stage Profile page", () => {
  profile.enterProfilePage().click();
});
And("I click on Edit button", () => {
  profile.clickEdit().click();
});
And("I clear newFullname", () => {
  profile.editFullNameField().clear()
});
And("I type in newFullname", () => {
  profile.editFullNameField().type("emma QA");
});
And("I select department", () => {
  profile.deptDropdown().select("Technology", {
    force: true,
  });
});
And("I click on save button", () => {
  profile.saveUserInfo().click({
    force: true,
  });
});
Then("Your validation should be shown", () => {
  profile.editValidation().should("be.visible");
});
