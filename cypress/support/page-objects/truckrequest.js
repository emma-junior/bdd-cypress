export class truckreqObj {
  enterTruckreqPage() {
    return cy.get(".title").contains("Truck Requests");
  }
  enterAllreq() {
    return cy.get('[href="/market-place/open?type=open"]');
  }
  selectChannel() {
    return cy.get("#channel");
  }
  whatsappChannel() {
    return cy
      .get(":nth-child(1) > .cdk-column-channel > .WHATSAPP")
      .first()
      .contains("p", " Whatsapp ");
  }
  emailChannel() {
    return cy
      .get("tbody > :nth-child(1) > .cdk-column-channel")
      .first()
      .contains("p", " Email ");
  }
  squadAppChannel() {
    return cy
      .get("tbody > :nth-child(1) > .cdk-column-channel")
      .first()
      .contains("p", " Squad App ");
  }
  squadDashboardChannel() {
    return cy
      .get("tbody > :nth-child(1) > .cdk-column-channel")
      .first()
      .contains("p", " Squad Dashboard ");
  }
  customerAppChannel() {
    return cy
      .get("tbody > :nth-child(1) > .cdk-column-channel")
      .first()
      .contains("p", " Customer App ");
  }
  customerDashboardChannel() {
    return cy
      .get("tbody > :nth-child(1) > .cdk-column-channel")
      .first()
      .contains("p", " Customer Dashboard ");
  }
  typeCustomer() {
    return cy.get("#customer");
  }
  enterCustomer() {
    return cy.get(".mat-option-text");
  }
  searchedCustomer() {
    return cy
      .get("tbody > :nth-child(1) > .cdk-column-customer")
      .first()
      .contains("p", " PaschalCustomer ");
  }
  selectStatus() {
    return cy.get(":nth-child(4) > .input-wrap > .ng-valid");
  }
  openStatus() {
    return cy
      .get(".mat-row > .cdk-column-status")
      .first()
      .contains("p", " Open ");
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
      .contains("p", " Expired ");
  }

  searchInput() {
    return cy.get(".reverse > .input-wrap > .ng-untouched");
  }
  requestId() {
    return cy
      .get(".mat-row > .cdk-column-requestId")
      .first()
      .contains("p", " TRQ1035863 ");
  }
  customer() {
    return cy
      .get("tbody > :nth-child(1) > .cdk-column-customer")
      .contains("p", " PaschalCustomer ");
  }
  clickAllRequest() {
    return cy.get('[href="/market-place/open?type=open"]');
  }
  allRequest() {
    return cy.get(".mat-tab-label-active").contains("All Requests ");
  }
  clickAssignedReq() {
    return cy.get('.mat-tab-links > [href="/market-place/assigned?type=dt"]');
  }
  AssignedRequest() {
    return cy.get(".mat-tab-label-active").contains("Assigned Requests ");
  }
}