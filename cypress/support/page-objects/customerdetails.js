export class customerdetailsObj {
  enterCustomerPage() {
    return cy.get(".title").contains("Customers");
  }
  clickOnACustomer() {
    return cy.get("tbody > :nth-child(1) > .cdk-column-id");
  }
  customerDetailsPage() {
    return cy.get(".extra-title").contains(" Customer Id ");
  }
  generalInfoEdit() {
    return cy.get(
      ":nth-child(2) > .card > .meta > .data > .card-action > .edit"
    );
  }
  typeBusinessName() {
    return cy.get(":nth-child(1) > .input-wrap > .ng-untouched");
  }
  selectCountry() {
    return cy.get("#country");
  }
  editRegNo() {
    return cy.get(":nth-child(4) > .input-wrap > .ng-untouched");
  }
  typeLocation() {
    return cy.get("#location");
  }
  enterLocation() {
    return cy.get("#mat-option-15 > .mat-option-text");
  }
  editTaxNo() {
    return cy.get(":nth-child(6) > .input-wrap > .ng-untouched");
  }
  generalInfoSave() {
    return cy.get(
      ":nth-child(2) > .card > .meta > .data > .card-action > .ng-star-inserted > .mat-button-wrapper > .mat-icon"
    );
  }
  generalInfo() {
    return cy
      .get(
        ":nth-child(2) > .card > .breakdown > .content_ > :nth-child(1) > .point"
      )
      .contains("emma");
  }
  clickAddAccount() {
    return cy.get(
      ":nth-child(2) > :nth-child(3) > kobo-card > .card > .breakdown > .businessaccounts > .header > .action > .add_account"
    );
  }
  typeBusinessAccDesc() {
    return cy.get("#description");
  }
  businessAccSubmit() {
    return cy.get(".content > .mat-focus-indicator");
  }
  businessAcc() {
    return cy.get(".main > .ng-tns-c286-128").contains("Account added!");
  }
  bankConfigEdit() {
    return cy.get(
      '[validate="true"] > .card > .meta > .data > .card-action > .edit'
    );
  }
  selectBankCountry() {
    return cy.get("#country");
  }
  selectBankName() {
    return cy.get("#bank");
  }
  bankConfigSave() {
    return cy.get(
      '[validate="true"] > .card > .meta > .data > .card-action > .ng-star-inserted > .mat-button-wrapper > .mat-icon'
    );
  }
  bankConfiguration() {
    return cy.get(".item > :nth-child(1)").contains("Citibank Nigeria");
  }
  uploadImage() {
    return cy.get("[type=file]");
  }
  imageUploaded() {
    return cy.get(".main").contains(" Uploading avatar");
  }
  clickPlusIcon() {
    return cy.get(
      ":nth-child(7) > .card > .meta > .data > .card-action > .mat-focus-indicator > .mat-button-wrapper > .mat-icon"
    );
  }
  enterContactEmail() {
    return cy.get("#email");
  }
  enterContactPhoneNo() {
    return cy.get(".input-wrap > .ng-star-inserted");
  }
  reqChannelSubmit() {
    return cy.get(".btn > .mat-focus-indicator");
  }
  requestChannel() {
    return cy.get(".main").contains("Contact Successfully Created");
  }
  clickOnaContactEdit() {
    return cy.get(":nth-child(10) > .cdk-column-Actions > .flex > .edit");
  }
  editContactEmail() {
    return cy.get("#email");
  }
  editContactPhoneNo() {
    return cy.get(".input-wrap > .ng-star-inserted");
  }
  editContactSubmit() {
    return cy.get(".btn > .mat-focus-indicator");
  }
  contactEditted() {
    return cy.get(".main").contains("Contact Successfully Updated");
  }
  contactDeleteIcon() {
    return cy.get(":nth-child(10) > .cdk-column-Actions > .flex > .delete");
  }
  confirmContactDelete() {
    return cy.get("#positive");
  }
  contactDeleted() {
    return cy.get(".main").contains("Contact Successfully deleted");
  }
  
  activateAndDeactivate() {
    return cy.get(
      "#mat-slide-toggle-1 > .mat-slide-toggle-label > .mat-slide-toggle-bar > .mat-slide-toggle-thumb-container > .mat-slide-toggle-thumb"
    );
  }
  confirmActivateAndDeactive() {
    return cy.get("#positive");
  }
  inactive() {
    return cy
      .get(
        "#mat-slide-toggle-1 > .mat-slide-toggle-label > .mat-slide-toggle-content"
      )
      .contains("Inactive");
  }
  active() {
    return cy
      .get(
        "#mat-slide-toggle-1 > .mat-slide-toggle-label > .mat-slide-toggle-content"
      )
      .contains("Active");
  }
  manageUsersLink() {
    return cy.get(":nth-child(6) > a > p");
  }
  customersUsers() {
    return cy.get(".start > .title").contains(" Customers User Management ");
  }
  tripReportToggleBtn() {
    return cy.get(
      "#mat-slide-toggle-63 > .mat-slide-toggle-label > .mat-slide-toggle-bar > .mat-slide-toggle-thumb-container > .mat-slide-toggle-thumb"
    );
  }
  tripReportActive() {
    return cy
      .get(
        "#mat-slide-toggle-63 > .mat-slide-toggle-label > .mat-slide-toggle-content"
      )
      .contains(" Active");
  }
  tripReportInactive() {
    return cy
      .get(
        "#mat-slide-toggle-94 > .mat-slide-toggle-label > .mat-slide-toggle-content"
      )
      .contains(" Inactive");
  }
}