Feature: Create truck request

    I want to create truck request 

        Background: user is moved to truck request page
            When I click stage Truck Request page

        Scenario: create truck request
        When I click on create request
        And I type customer
        And I enter the customer
        And I select business unit
        And I select the type of truck i need
        And I click the next button
        Then I am taken to the business account info page
        When I select a business account info
        And I select business account
        And I click the second next button
        Then I am taken to where i can select truck type
        When I select truck type
        And I select truck size
        And I select truck quantity
        And I select currency
        And I select amount
        And I click the third next button
        Then It should be taken to where i can select pick up location
        When I click on a pick up location
        And I type delivery address
        And I enter delivery address
        And I select delivery state
        And I click the fourth next button
        Then i should be take to where i can set expiry date and time
        When I click on the date icon
        And I click on a date
        And I select time
        And I click the fifth next button
        Then It should be taken to where i can write a comment