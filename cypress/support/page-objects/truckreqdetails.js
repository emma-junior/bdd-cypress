export class truckreqdetailsObj {
    enterTruckReqPage() {
        return cy.get(".title").contains("Truck Requests");
    }
    enterARow() {
        return cy.get("tbody > :nth-child(1) > .cdk-column-requestId");
    }
    userIsTakenToNextPg() {
        return cy.get(".start > .title").contains(" Truck Request Detail ");
    }
    enterEdit() {
        return cy.get(
          ".right > .date > .card > .meta > .data > .card-action > .edit"
        );
    }
    selectShowPartnerPayout() {
        return cy.get(":nth-child(1) > .input-wrap > .ng-untouched");
    }
    selectCurrency() {
        return cy.get(":nth-child(2) > .input-wrap > .ng-untouched");
    }
    clearPotentialGTV() {
        return cy.get(":nth-child(3) > .input-wrap > .ng-untouched");
    }
    typePotentialGTV() {
        return cy.get(":nth-child(3) > .input-wrap > .ng-untouched");
    }
    clickOnSave() {
        return cy.get(".ng-star-inserted > .mat-button-wrapper > .mat-icon");
    }
    validation() {
        return cy.get(".main").contains("Truck Request Updated Successfully");
    }
    expiryDateAndTimeEdit() {
        return cy.get(
          "app-request-expiry-card.ng-tns-c389-6 > .date > .card > .meta > .data > .card-action > .edit"
        );
    }
    selectETAtoSupplyTime() {
        return cy.get(
          ".content.ng-untouched > :nth-child(3) > .input-wrap > #time"
        );
    }
    selectETAtoSupplyDate() {
        return cy.get(
          ".mat-calendar-body-active > .mat-calendar-body-cell-content"
        );
    }
    clickOnExpiryDateIcon() {
        return cy.get(
          ".content.ng-valid > .date-picker-wrap > kobo-input > .input-wrap > .mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-datepicker-toggle-default-icon"
        );
    }
    selectExpiryDay() {
        return cy.get(
          '[aria-label="January 11, 2023"] > .mat-calendar-body-cell-content'
        );
    }
    selectExpiryTime() {
        return cy.get(
          ".content.ng-valid > :nth-child(3) > .input-wrap > #time"
        );
    }
    expiryDateSaveIcon() {
        return cy.get(".ng-star-inserted > .mat-button-wrapper > .mat-icon");
    }
    routeInfoEdit() {
        return cy.get(
          ":nth-child(3) > .card > .meta > .data > .card-action > .edit"
        );
    }
    editPickupStation() {
        return cy.get(":nth-child(1) > .input-wrap > #destination");
    }
    enterPickupStation() {
        return cy
          .get(".mat-option-text")
          .contains("span", "Funsho Williams Avenue, Lagos, Nigeria");
    }
    editDestination() {
        return cy.get(":nth-child(2) > .input-wrap > #destination");
    }
    enterDestination() {
        return cy.get(".mat-option-text").contains(
          "span",
          "Kaduna International Airport, Kaduna, Nigeria"
        );
    }
    routeInfoSave() {
        return cy.get(".ng-star-inserted > .mat-button-wrapper > .mat-icon");
    }
    truckTypeEdit() {
        return cy.get(
          ".truck-type > .card > .meta > .data > .card-action > .edit"
        );
    }
    selectTruckType() {
        return cy.get(":nth-child(1) > .input-wrap > .ng-untouched");
    }
    selectTruckSize() {
        return cy.get(":nth-child(2) > .input-wrap > .ng-untouched");
    }
    truckTypeSave() {
        return cy.get(".ng-star-inserted > .mat-button-wrapper > .mat-icon");
    }
    businessInfoEdit() {
        return cy.get(
          ".route-info.ng-star-inserted > .card > .meta > .data > .card-action > .edit"
        );
    }
    selectBusinessUnit() {
        return cy.get(":nth-child(1) > .input-wrap > .ng-untouched");
    }
    selectBusinessAcc() {
        return cy.get(":nth-child(2) > .input-wrap > .ng-untouched");
    }
    businessInfoSave() {
        return cy.get(".ng-star-inserted > .mat-button-wrapper > .mat-icon");
    }
}