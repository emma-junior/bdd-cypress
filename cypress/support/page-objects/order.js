export class orderObj {
  enterOrderPage() {
    return cy.get(":nth-child(6) > .sub-menu > :nth-child(2) > .menu-wrap");
  }
  selectChannel() {
    return cy.get("#channel");
  }
  // whatsappChannelValidation() {

  // }
  typeCustomer() {
      return cy.get("#customer");
  }
  enterCustomer() {
      return cy.get("#mat-option-6");
  }
  searchedCustomer() {
      return cy
        .get("tbody > :nth-child(1) > .cdk-column-customer")
        .first()
        .contains('p', " PaschalCustomer ");
  }
  selectStatus() {
    return cy.get(":nth-child(4) > .input-wrap > .ng-valid");
  }
  openStatus() {
    return cy.get(".mat-row > .cdk-column-status").first().contains('p', " Open ");
  }
  AcceptedStatus() {
    return cy
      .get("tbody > :nth-child(1) > .cdk-column-status")
      .first()
      .contains("p", " Accepted ");
  }
  ExpiredStatus() {
    return cy
      .get("tbody > :nth-child(1) > .cdk-column-status")
      .first()
      .contains('p', " Expired ");
  }
  CancelledStatusValidation() {
    return cy
      .get("tbody > :nth-child(1) > .cdk-column-status")
      .first()
      .contains('p', " Cancelled ");
  }
  selectExpiryDate() {
    return cy.get(":nth-child(1) > .input-wrap > .ng-pristine");
  }
  //   todayExpiryDateValidation() {
  //       return cy.contains("p", "  Apr 30, 2022, 1:00:00 AM  ");
  //   }
  next3DaysExpiryDateValidation() {
    return cy.contains("p", "  Apr 30, 2022, 1:00:00 AM  ");
  }
  next7DaysExpiryDateValidation() {
    return cy.contains("p", "  Apr 30, 2022, 1:00:00 AM  ");
  }
  next14DaysExpiryDateValidation() {
    return cy.contains("p", "  Apr 30, 2022, 1:00:00 AM  ");
  }
  searchInput() {
    return cy.get(".reverse > .input-wrap > .ng-untouched");
  }
  requestId() {
    return cy.get(".mat-row > .cdk-column-requestId").first().contains('p', " TRQ1035724 ");
  }
  customer() {
    return cy
      .get("tbody > :nth-child(1) > .cdk-column-customer")
      .contains("p", " Biggy Limited ");
  }
  Regular() {
    return cy.get(".mat-tab-links > :nth-child(1)");
  }
  Container() {
    return cy.get(".mat-tab-links > :nth-child(2)");
  }
  Bulk() {
    return cy.get(".mat-tab-links > :nth-child(3)");
  }
  RegularValidation() {
    return cy.get(".mat-tab-label-active").contains("Regular ");
  }
  ContainerValidation() {
    return cy.get(".mat-tab-label-active").contains(" Container ");
  }
  BulkValidation() {
    return cy.get(".mat-tab-label-active").contains("Bulk ");
  }
}

