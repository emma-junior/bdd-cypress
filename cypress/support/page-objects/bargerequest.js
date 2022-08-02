export class bargeRequestObj {
  enterBargereqPage() {
    return cy.get(".title").contains("Barge Requests");
  }
  searchBargeList() {
    return cy.get(".ng-valid");
  }
  pendingBargereq() {
    return cy
      .get(".mat-row > .cdk-column-status")
      .first()
      .contains("p", " Pending ");
  }
  clickBargeList() {
    return cy.get(".mat-row > .cdk-column-status").first();
  }
  bargeDetail() {
    return cy.get(".start > .title").contains(" Barge Detail ");
  }
  cargoInfoSearch() {
    return cy.get(".ng-untouched");
  }
  containerId() {
    return cy.get(".grid > :nth-child(1) > .point").contains("4343545454");
  }
  clickViewTrips() {
    return cy.get(".btn-actions > .mat-focus-indicator");
  }

  clickCancel() {
    return cy.get('[href="/barge/requests"] > .mat-focus-indicator');
  }
  bargeReqPage() {
    return cy.get(".start > .title").contains(" Barge Request List ");
  }
  searchInput() {
    return cy.get(".ng-valid");
  }
  requestId() {
    return cy.get(".cdk-column-bargeId > :nth-child(1)").contains("REQ1035580");
  }
}
