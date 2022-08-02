export class driverdetailsObj {
  enterDriversPage() {
    return cy.get(".title").contains("Drivers");
  }
  clickADriver() {
    return cy.get("tbody > :nth-child(1) > .cdk-column-name").parent();
  }
  driverDetailsPage() {
    return cy.get(".extra-title").contains(" Driver Id ");
  }
  driverInfoEditBtn() {
    return cy.get(
      ":nth-child(1) > .card > .meta > .data > .card-action > .edit"
    );
  }
  editFirstName() {
    return cy.get(":nth-child(1) > .input-wrap > .ng-untouched");
  }
  editLastName() {
    return cy.get(":nth-child(2) > .input-wrap > .ng-untouched");
  }
  editPhoneNo() {
    return cy.get(".input-wrap > .ng-star-inserted");
  }
  saveDriverInfo() {
    return cy.get(".ng-star-inserted > .mat-button-wrapper > .mat-icon");
  }
  driverInfoEditted() {
    return cy
      .get(
        ":nth-child(1) > .card > .breakdown > .content_ > :nth-child(1) > .point"
      )
      .contains("John");
  }
  driverDocEditBtn() {
    return cy.get(
      ":nth-child(2) > .card > .meta > .data > .card-action > .edit"
    );
  }
  editLicenseNo() {
    return cy.get(":nth-child(1) > .input-wrap > .ng-untouched");
  }
  clickOnDateIcon() {
    return cy.get(".mat-datepicker-toggle-default-icon");
  }
  moveToNextMonth() {
    return cy.get(".mat-calendar-next-button");
  }
  selectDate() {
    return cy.get(
      ".mat-calendar-body-active > .mat-calendar-body-cell-content"
    );
  }
  saveDriverDoc() {
    return cy.get(".ng-star-inserted > .mat-button-wrapper > .mat-icon");
  }
  driverDocEditted() {
    return cy
      .get(
        ":nth-child(2) > .card > .breakdown > .content_ > :nth-child(1) > .point"
      )
      .contains("bond07");
  }
  partnerInfoEditBtn() {
    return cy.get(
      ":nth-child(3) > .card > .meta > .data > .card-action > .edit"
    );
  }
  typePartnersBusinessName() {
    return cy.get(".mat-autocomplete-trigger");
  }
  enterPartnersBusinessName() {
    return cy.get(".option");
  }
  savePartnersInfo() {
    return cy.get(".ng-star-inserted > .mat-button-wrapper > .mat-icon");
  }
  partnersInfo() {
    return cy
      .get(
        ":nth-child(3) > .card > .breakdown > .content_ > :nth-child(1) > .point"
      )
      .contains("Tochukwu");
  }

  activeAndDeactivate() {
    return cy.get(
      "#mat-slide-toggle-13 > .mat-slide-toggle-label > .mat-slide-toggle-bar > .mat-slide-toggle-thumb-container > .mat-slide-toggle-thumb"
    );
  }
  confirmActivateAndDeactive() {
    return cy.get("#positive");
  }
  inactive() {
    return cy
      .get(
        "#mat-slide-toggle-13 > .mat-slide-toggle-label > .mat-slide-toggle-content"
      )
      .contains("Inactive");
  }
  active() {
    return cy
      .get(
        "#mat-slide-toggle-13 > .mat-slide-toggle-label > .mat-slide-toggle-content"
      )
      .contains("Active");
  }
  ussdTrainingBtn() {
    return cy.get(
      "#mat-slide-toggle-18 > .mat-slide-toggle-label > .mat-slide-toggle-bar > .mat-slide-toggle-thumb-container > .mat-slide-toggle-thumb"
    );
  }
  UssdNotTrained() {
    return cy
      .get(
        "#mat-slide-toggle-18 > .mat-slide-toggle-label > .mat-slide-toggle-content"
      )
      .contains(" Not trained");
  }
  ussdTrained() {
    return cy
      .get(
        "#mat-slide-toggle-18 > .mat-slide-toggle-label > .mat-slide-toggle-content"
      )
      .contains(" Trained");
  }
  appTrainingBtn() {
    return cy.get(
      "#mat-slide-toggle-23 > .mat-slide-toggle-label > .mat-slide-toggle-bar > .mat-slide-toggle-thumb-container > .mat-slide-toggle-thumb"
    );
  }
  appTrained() {
    return cy
      .get(
        "#mat-slide-toggle-23 > .mat-slide-toggle-label > .mat-slide-toggle-content"
      )
      .contains(" Trained");
  }
  notAppTrained() {
    return cy
      .get(
        "#mat-slide-toggle-23 > .mat-slide-toggle-label > .mat-slide-toggle-content"
      )
      .contains(" Not trained");
  }
  uploadImage() {
    return cy.get("[type=file]");
  }
  imageUploaded() {
    return cy.get(".main").contains("Uploading avatar");
  }
}
