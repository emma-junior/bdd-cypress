export class profileObj {
  enterProfilePage() {
    return cy.get(":nth-child(5) > .sub-menu > :nth-child(1) > .menu-wrap");
  }
  clickEdit() {
    return cy.contains(".edit", "EDIT");
  }
  editFullNameField() {
    return cy.get(":nth-child(1) > .input-wrap > .ng-untouched");
  }
  deptDropdown() {
    return cy.get(":nth-child(4) > .input-wrap > .ng-valid");
  }
  saveUserInfo() {
    return cy.get(".ng-star-inserted > .mat-button-wrapper > .mat-icon");
  }
  editValidation() {
      return cy.get(".main");
  }
}