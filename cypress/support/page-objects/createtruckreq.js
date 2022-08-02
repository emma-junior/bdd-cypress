export class createTruckreqObj {
  enterTruckreqPage() {
    return cy.get(":nth-child(6) > .sub-menu > :nth-child(1) > .menu-wrap");
  }
  clickCreateTruckreq() {
    return cy.get(".mat-raised-button");
  }
  typeCustomer() {
      return cy.get("#customer");
  }
  enterCustomer() {
      return cy.get(".mat-option-text");
  }
  selectBusinessUnit() {
      return cy.get("#businessUnit");
  }
  selectTypeOfTruck() {
      return cy.get(
        "#mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle"
      );
  }
  clickNext() {
      return cy.get(
        '#cdk-step-content-0-0 > .step-action > [matsteppernext=""]'
      );
  }
  businessAccInfo() {
      return cy.get(
        "#cdk-step-content-0-1 > .step-card > .card > .meta > .data > .title"
      );
  }
  typeOfBusiness() {
      return cy.get(":nth-child(1) > .selector > .select");
  }
  selectBusinessAcc() {
      return cy.get("#customerAccount");
  }
  clickSecondNext() {
      return cy.get(
        '#cdk-step-content-0-1 > .step-action > [matsteppernext=""]'
      );
  }
  truckType() {
      return cy.get(
        ".ng-dirty > :nth-child(1) > :nth-child(1) > .card > .meta > .data > .title"
      );
  }
  selectTruckType() {
      return cy.get(".content > ul > :nth-child(6)");
  }
  selectTruckSize() {
      return cy.get("#size");
  }
  increaseTruckQty() {
      return cy.get(":nth-child(3) > .mat-icon");
  }
  decreaseTruckQty() {
      return cy.get(".picker > :nth-child(1) > .mat-icon");
  }
  selectCurrency() {
      return cy.get("#currency");
  }
  enterAmount() {
      return cy.get(".content > :nth-child(2) > .input-wrap > .ng-valid");
  }
  clickThirdNext() {
      return cy.get(
        '#cdk-step-content-0-2 > .step-action > [matsteppernext=""]'
      );
  }
  pickupLocation() {
      return cy.get(
        "#cdk-step-content-0-3 > .step-card > .card > .meta > .data > .title"
      );
  }
  selectPickupLocation() {
      return cy.get(
        "#cdk-step-content-0-3 > .step-card > .card > .breakdown > .content > :nth-child(1)"
      );
  }
  typeDeliveryAddress() {
      return cy.get("#destination");
  }
  enterDeliveryAddress() {
      return cy.get("#mat-option-79 > .mat-option-text");
  }
  selectDeliveryState() {
      return cy.get("#deliveryState");
  }
  clickFourthNext() {
    return cy.get('#cdk-step-content-0-4 > .step-action > [matsteppernext=""]');
  }
  expiryDateAndTime() {
    return cy.get(
      "#cdk-step-content-0-5 > .step-card > .card > .meta > .data > .title"
    );
  }
  clickOnDate() {
    return cy.get(".mat-datepicker-toggle > .mat-focus-indicator");
  }
  selectDate() {
    return cy.get(
      '[aria-label="May 26, 2022"] > .mat-calendar-body-cell-content'
    );
  }
  selectTime() {
    return cy.get("#time");
  }
  clickFifthNext() {
    return cy.get('#cdk-step-content-0-5 > .step-action > [matsteppernext=""]');
  }
  comment() {
    return cy.get(
      "#cdk-step-content-0-6 > .step-card > .card > .meta > .data > .title"
    );
  }
}