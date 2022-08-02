export class driversObj {
    enterDriversPage() {
        return cy.get(".title").contains("Drivers");
    }
    driverPage() {
        return cy.get(".start > .title").contains(" Drivers List ");
    }
    addDriverBtn() {
        return cy.get(".create > .mat-focus-indicator");
    }
    enterFirstName() {
        return cy.get("#first_name");
    }
    enterLastName() {
        return cy.get("#last_name");
    }
    enterEmail() {
        return cy.get("#email");
    }
    selectCountry() {
        return cy.get("#country");
    }
    enterPhoneNo() {
        return cy.get(
          "kobo-phone-number.ng-untouched > kobo-input > .input-wrap > .ng-star-inserted"
        );
    }
    enterSecret() {
        return cy.get("#secret");
    }
    typePartner() {
        return cy.get("#partner_id");
    }
    enterPartner() {
        return cy.get("#mat-option-5 > .mat-option-text");
    }
    clickAdd() {
        return cy.get(".btn > .mat-focus-indicator");
    }
    driverAdded() {
        return cy.get(".main > .ng-tns-c286-6");
    }
    searchDriver() {
        return cy.get(".ng-untouched");
    }
    driverSearched() {
        return cy.get(".cdk-column-name > p").contains("Jacob Joel ");
    }
}