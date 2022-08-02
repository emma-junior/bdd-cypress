export class partnerObj {
  enterPartnerPage() {
    return cy.get(".title").contains("Partners");
  }
  addPartnerButton() {
    return cy.get(".create > .mat-focus-indicator");
  }
  createPartnerButton() {
    return cy.get(".btn > .mat-focus-indicator");
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
  enterBusinessName() {
    return cy.get(":nth-child(3) > .input-wrap > .ng-untouched");
  }
  enterLocation() {
    return cy.get(":nth-child(4) > .input-wrap > .ng-untouched");
  }
  enterPhoneNo() {
    return cy.get(
      "kobo-phone-number.ng-untouched > kobo-input > .input-wrap > .ng-star-inserted"
    );
  }
  enterPartnerPassword() {
    return cy.get("#secret");
  }
  enterAddButton() {
    return cy.get(".content > .btn > .mat-focus-indicator");
  }
  addPartnerModal() {
    return cy.get("#mat-dialog-0");
  }
  addToTransporterList() {
    return cy.get(".content > .btn > .mat-focus-indicator");
  }
  partnerAdded() {
    return cy.get(".main").contains("Successful");
  }
  confirmAdd() {
    return cy.get("#positive");
  }
  alreadyExist() {
    return cy
      .get(".main")
      .contains("Truck Partner with the Name already exist");
  }
}
