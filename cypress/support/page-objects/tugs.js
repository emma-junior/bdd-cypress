export class tugsObj {
  enterTugsPage() {
    return cy.get(".title").contains("Tugs");
  }
  clickOnTug() {
    return cy.get(":nth-child(1) > .cdk-column-tugId > a");
  }
  tugDetails() {
    return cy.get(".start > .title").contains(" TUG ");
  }
  tugInfoEdit() {
    return cy.get(
      ".details > :nth-child(1) > .card > .meta > .data > .card-action > .edit"
    );
  }
  editTugName() {
    return cy.get("#name");
  }
  tugInfoSave() {
    return cy.get(
      ":nth-child(1) > .card > .meta > .data > .card-action > .ng-star-inserted > .mat-button-wrapper > .mat-icon"
    );
  }
  tugInfo() {
    return cy.get(":nth-child(1) > .point").contains("golden incb");
  }
  crewInfoEdit() {
    return cy.get(
      ":nth-child(3) > kobo-card.ng-star-inserted > .card > .meta > .data > .card-action > .edit"
    );
  }
  captainName() {
    return cy.get("#captainName");
  }
  captainMobileNo() {
    return cy.get("#mobileNo");
  }
  crewMember1Name() {
    return cy.get(
      ":nth-child(2) > :nth-child(1) > .input-wrap > .ng-untouched"
    );
  }
  crewMember1Mobile() {
    return cy.get(
      ":nth-child(2) > :nth-child(2) > .input-wrap > .ng-untouched"
    );
  }
  crewMember2Name() {
    return cy.get(
      ":nth-child(3) > :nth-child(1) > .input-wrap > .ng-untouched"
    );
  }
  crewMember2Mobile() {
    return cy.get(
      ":nth-child(3) > :nth-child(2) > .input-wrap > .ng-untouched"
    );
  }
  crewInfoSave() {
    return cy.get(
      ":nth-child(3) > kobo-card.ng-star-inserted > .card > .meta > .data > .card-action > .ng-star-inserted > .mat-button-wrapper > .mat-icon"
    );
  }
  // crewInfo() {
  //   return cy.get(".main > .ng-tns-c286-7").contains("Tug Crew Updated");
  // }
  crewInfo() {
    return cy
      .get(":nth-child(1) > .crew-info > :nth-child(1) > .title")
      .contains("Emma Junior");
  }
  uploadImage() {
    return cy.get("[type=file]");
  }
  imageUploaded() {
    return cy.get(".main").contains("Uploading avatar");
  }
  clickCancel() {
    return cy.get('[href="/barge/tugs"] > .mat-focus-indicator');
  }
  tugSearch() {
    return cy.get(".ng-untouched");
  }
  tugId() {
    return cy.get(".mat-row > .cdk-column-tugId").contains("Goldengrace-");
  }
}