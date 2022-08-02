export class bargesObj {
  enterBargesPage() {
    return cy.get(".title").contains("Barges");
  }
  clickOnBarge() {
      return cy.get("tbody > :nth-child(1) > .cdk-column-bargeId").parent();
  }
  bargeDetails() {
      return cy.get(".start > .title").contains(" Barge Detail ");
  }
  addBargeSchedule() {
      return cy.get(":nth-child(3) > .card > .mat-focus-indicator");
  }
  typeTerminal() {
      return cy.get("#schedule-terminal");
  }
  selectTerminal() {
      return cy.get(".mat-option-text");
  }
  dateIcon() {
      return cy.get(".mat-datepicker-toggle-default-icon");
  }
  nextMonth() {
      return cy.get(".mat-calendar-next-button");
  }
  selectDate() {
      return cy.get(
        '[aria-label="July 27, 2022"] > .mat-calendar-body-cell-content'
      );
  }
  selectFrom() {
      return cy.get("#schedule-from");
  }
  selectTo() {
      return cy.get("#schedule-to");
  }
  addScheduleBtn() {
      return cy.get(".card > .mat-raised-button");
  }
  bargeSchedule() {
      return cy.get(".main").contains("Schedule added");
  }
  typeInTug() {
      return cy.get("#match-tug");
  }
  clickOnTug() {
      return cy.get(".mat-option-text");
  }
  matchBtn() {
      return cy.get(":nth-child(2) > :nth-child(2) > .mat-focus-indicator");
  }
  TugMatched() {
      return cy.get(".main").contains("Pairing Tug");
  }
  activeAndDisableBtn() {
      return cy.get(".mat-slide-toggle-thumb");
  }
  disabled() {
      return cy.get(".mat-slide-toggle-content").contains("Disabled");
  }
  activated() {
      return cy.get(".mat-slide-toggle-content").contains("Activated");
  }
  viewTripsBtn() {
      return cy.get(".cols > :nth-child(1) > .mat-focus-indicator");
  }
  NoTrips() {
      return cy.get("h2").contains("No Trips Found");
  }
  TripsFound() {
      return cy.get(".barge-status").contains(" Pending ");
  }
  searchInput() {
      return cy.get(".ng-untouched");
  }
  searchDisplayed() {
      return cy.get(".cdk-column-bargeId > p").contains("TVGHHCD");
  }
  viewTripsBargeLi() {
      return cy.get(":nth-child(1) > .cdk-column-action > .view-requests");
  }
}