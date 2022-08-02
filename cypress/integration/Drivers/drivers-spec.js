/// <reference types="cypress" />
import { driversObj } from "../../support/page-objects/drivers";
const drivers = new driversObj

When("I click drivers in sidebar", () => {
    drivers.enterDriversPage().click();
});
Then("I should be taken to drivers page", () => {
    drivers.driverPage().should("be.visible");
})
When("I click add driver", () => {
    drivers.addDriverBtn().click();
});
And("I enter first name", () => {
    drivers.enterFirstName().type("Emmanuel");
});
And("I enter last name", () => {
    drivers.enterLastName().type("Junior");
});
And("I enter email", () => {
    drivers.enterEmail().type("emma@gmail.com");
})
And("I select country", () => {
    drivers.selectCountry().select("Nigeria", {force: true});
})
And("I enter phone number", () => {
    drivers.enterPhoneNo().type("08054367855");
});
And("I enter secret", () => {
    drivers.enterSecret().type("Emma-007");
});
And("I type partner", () => {
    drivers.typePartner().type("johnson");
})
And("I enter partner", () => {
  drivers.enterPartner().click();
});
And("I click add", () => {
    drivers.clickAdd().click();
})
// Then("", () => {

// })

When("I type in my search", () => {
    drivers.searchDriver().type("jacob joel");
});
Then("Driver list should be filtered by my search", () => {
    drivers.driverSearched().should("be.visible");
})