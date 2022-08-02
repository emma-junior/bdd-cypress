/// <reference types="cypress" />
import {truckreqObj} from '../../support/page-objects/truckrequest'
const truckReq = new truckreqObj()


Given("I click Truck Request page", () => {
    truckReq.enterTruckreqPage().click().wait(2000);
});

When("I select Whatsapp", () => {
  truckReq.selectChannel().select("Whatsapp", {force: true});
});
Then("It should be filtered by Whatsapp", () => {
  truckReq.whatsappChannel().should("be.visible").wait(2000);
});
When("I select email", () => {
  truckReq.selectChannel().select("Email", {force: true}).wait(2000);
});
Then("It should be filtered by Email", () => {
  truckReq.emailChannel().should("be.visible").wait(2000);
});
When("I select Squad App", () => {
  truckReq.selectChannel().select("Squad App", {force: true}).wait(2000);
});
Then("It should be filtered by Squad App", () => {
  
  // cy.get(".content-wrap").then(($body) => {
  //   console.log($body.text().includes(""));
  //   if ($body.text().includes("")==true) {
  //     cy.get(".table-area").should("be.visible").wait(3000);
  //   } else if ($body.text().includes("Squad App") == true) {
  //     truckReq.squadAppChannel().should("be.visible");
  //   }
  // });
  
  cy.get(".content-wrap").then(($body) => {
    // console.log($body.text().includes(""));
    if ($body.find("tbody").text().includes("")) {
      cy.get(".table-area").should("be.visible").wait(3000);
    } else if ($body.text().includes("Squad App")) {
      truckReq.squadAppChannel().should("be.visible");
    }
  });

});
When("I select Squad Dashboard", () => {
  truckReq.selectChannel().select("Squad Dashboard", {force: true}).wait(2000);
});
Then("It should be filtered by Squad Dashboard", () => {
  truckReq.squadDashboardChannel().should("be.visible").wait(2000);
});
When("I select Customer App", () => {
  truckReq.selectChannel().select("Customer App").wait(5000);
});
Then("It should be filtered by Customer App", () => {
  truckReq.customerAppChannel().should("be.visible").wait(5000);
});
When("I select Customer Dashboard", () => {
  truckReq.selectChannel().select("Customer Dashboard").wait(5000);
});
Then("It should be filtered by Customer Dashboard", () => {
  truckReq.customerDashboardChannel().should("be.visible").wait(5000);
});


When("I Type customer", () => {
  truckReq.typeCustomer().type("PaschalCustomer").wait(5000);
});
And("I enter customer", () => {
  truckReq.enterCustomer().click().wait(5000);
});
Then("It should be filtered by my search", () => {
  truckReq.searchedCustomer().should("be.visible");
});

When("I select open", () => {
  truckReq.selectStatus().select("Open").wait(5000);
});
Then("It should be filtered by open status", () => {
  truckReq.openStatus().should("be.visible");
});
When("I select Accepted", () => {
  truckReq.selectStatus().select("Accepted", { force: true }).wait(5000);
});
Then("It should be filtered by Accepted status", () => {
  truckReq.AcceptedStatus().should("be.visible");
});
When("I select Expired", () => {
  truckReq.selectStatus().select("Expired", { force: true }).wait(5000);
});
Then("It should be filtered by Expired status", () => {
  truckReq.ExpiredStatus().should("be.visible");
});

When("I search for Request Id", () => {
  truckReq.searchInput().type("TRQ1035863", { force: true }).wait(5000).clear();
});
Then("It should be filtered by Request Id", () => {
  truckReq.requestId().should("be.visible");
});
When("I search for customer", () => {
  truckReq.searchInput().type("paschalcustomer", { force: true }).wait(5000).clear(5000);
});
Then("It should be filtered by customer", () => {
  truckReq.customer().should("be.visible");
});
When("I click on all requests", () => {
  truckReq.clickAllRequest().click();
});
Then("It should be moved to all requests", () => {
  truckReq.allRequest().should("be.visible");
})
When("I click on Assigned requests", () => {
  truckReq.clickAssignedReq().click();
});
Then("It should be moved to Assigned requests", () => {
  truckReq.AssignedRequest().should("be.visible");
});