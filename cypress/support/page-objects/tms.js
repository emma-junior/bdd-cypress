/// <reference types="cypress" />

export class tmsObj {
  enterTmsPage() {
    return cy.get(".title").contains("Tracker Management");
  }
  tmsPage() {
    return cy.get(".start > .title").contains(" Tracker Management ");
  }

  //columns
  trackerID() {
    return cy.get("thead").contains("Inventory ID");
  }
  trackerProvider() {
    return cy.get("thead").contains("Provider");
  }
  trackerImei() {
    return cy.get("thead").contains("IMEI");
  }
  trackerMsisdn() {
    return cy.get("thead").contains("MSISDN");
  }
  storeLocation() {
    return cy.get("thead").contains("Store Location");
  }
  status() {
    return cy.get("thead").contains("Status");
  }
  inStoreDate() {
    return cy.get("thead").contains("In-Store Date");
  }
  fieldOfficer() {
    return cy.get("thead").contains("Field Officer");
  }
  currentLocation() {
    return cy.get("thead").contains("Current Location");
  }
  dispatchedDate() {
    return cy.get("thead").contains("Dispatched Date");
  }
  recievedDate() {
    return cy.get("thead").contains("Received Date");
  }
  decommissionedReason() {
    return cy.get("thead").contains("Decommissioned Reason");
  }
  decommissionedBy() {
    return cy.get("thead").contains("Decommissioned by");
  }
  decommissionedDate() {
    return cy.get("thead").contains("Decommissioned Date");
  }
  lostInfo() {
    return cy.get("thead").contains("Lost Info");
  }
  lostDate() {
    return cy.get("thead").contains("Lost Date");
  }
  dateCreated() {
    return cy.get("thead").contains("Date Created");
  }
  actions() {
    return cy.get("thead").contains("Actions");
  }
  //update status for store
  clickStore() {
    return cy.get(".mat-tab-links > :nth-child(1)");
  }
  store() {
    return cy.get(".mat-tab-label-active").contains(" Store ");
  }
  storeCheckBox() {
    return cy.get("tbody > :nth-child(2) > :nth-child(1) > .ng-star-inserted");
  }
  updateStatusBtn() {
    return cy.get(".create > .mat-focus-indicator");
  }
  updateStatusModal() {
    return cy.get(".header-container > .title").contains("Update Status");
  }
  selectStatus() {
    return cy.get("#status");
  }
  dropdownAfterSelStatus() {
    return cy.get(":nth-child(2) > label");
  }
  typeFieldOfficer() {
    return cy.get(":nth-child(2) > .input-wrap > #status");
  }
  enterFieldOfficer() {
    return cy.get("#mat-option-0 > .mat-option-text");
  }
  selectBusinessUnit() {
    return cy.get("[formcontrolname=businessUnit]");
  }
  UpdateStatus() {
    return cy.get(".btn > .mat-focus-indicator");
  }
  statusUpdated() {
    return cy.get(".main");
    // .contains("Tracker Status Updated");
  }
  //field
  clickField() {
    return cy.get(".mat-tab-links > :nth-child(2)");
  }
  field() {
    return cy.get(".mat-tab-label-active").contains(" Field ");
  }
  selectStoreLocation() {
    return cy.get("[formcontrolname=storeLocation]");
  }
  selectReason() {
    return cy.get("[formcontrolname=reason]");
  }
  additionalInfo() {
    return cy.get(":nth-child(4) > .input-wrap > .ng-untouched");
  }

  //decommissioned
  clickDecommissioned() {
    return cy.get(".mat-tab-links > :nth-child(3)");
  }
  decommissioned() {
    return cy.get(".mat-tab-label-active").contains(" Decommissioned ");
  }

  ddAfterSelStatusInDecNLost() {
    return cy.get("kobo-input.ng-star-inserted > label");
  }
  enterLostInfo() {
    return cy.get("kobo-input.ng-star-inserted > .input-wrap > .ng-untouched");
  }

  //lost
  clickLost() {
    return cy.get(".mat-tab-links > :nth-child(4)");
  }
  lost() {
    return cy.get(".mat-tab-label-active").contains(" Lost ");
  }

  //rent
  clickRent() {
    return cy.get(".mat-tab-links > :nth-child(5)");
  }
  rent() {
    return cy.get(".mat-tab-label-active").contains(" Rent ");
  }

  //tracker detail
  trackerDetailIcon() {
    return cy.get(
      ':nth-child(1) > :nth-child(10) > [src="../../../assets/img/tracker-info.svg"]'
    );
  }
  trackerDetail() {
    return cy.get(".start > .title").contains(" Tracker Detail ");
  }
  trackerInfo() {
    return cy
      .get(
        ".tracker-card-detail-container > :nth-child(1) > :nth-child(1) > .title"
      )
      .contains("Tracker Info");
  }
  backBtn() {
    return cy.get(".arrow-back > .mat-focus-indicator > .mat-button-wrapper");
  }

  //search
  search() {
    return cy.get(".ng-valid");
  }
  searchValidated() {
    return cy
      .get("tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted")
      .contains(" Blessing ");
  }
  //add tracker
  addTrackerBtn() {
    return cy.get(".primary-actions > .mat-focus-indicator");
  }
  selectProvider() {
    return cy.get("#provider");
  }
  addStoreLocation() {
    return cy.get("#storeLocation");
  }
  selectTrackerType() {
    return cy.get("#trackerType");
  }
  selectOwnership() {
    return cy.get("#ownership");
  }
  enterImeiNumber() {
    return cy.get("#imei");
  }
  enterMsisdn() {
    return cy.get("#msisdn");
  }
  saveTrackerBtn() {
    return cy.get("#save_tracker");
  }
  trackerAdded() {
    return cy.get(".main").contains("Tracker added successfully");
  }
  trackerAlreadyAdded() {
    return cy.get(".main").contains(" Tracker already exist in database ");
  }

  //filters
  allFilterButton() {
    return cy.get(".all_filters_container > p");
  }
  storeCategory() {
    return cy.get(".header-container > .title").contains("Store Category");
  }
  filterApplyBtn() {
    return cy.get("#apply-button");
  }
  providerFiltered() {
    return cy
      .get("tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted")
      .contains("Test");
  }
  storeLocationFiltered() {
    return cy
      .get("tbody > :nth-child(1) > :nth-child(6) > .ng-star-inserted")
      .contains("Kobo 360 Building, Surulere, nigeria");
  }
  filterStatus() {
    return cy.get("#storeStatus");
  }
  statusFiltered() {
    return cy
      .get("tbody > :nth-child(1) > :nth-child(7) > .ng-star-inserted")
      .contains("In-store");
  }
  resetBtn() {
    return cy.get(":nth-child(1) > .task-btn");
  }
}
