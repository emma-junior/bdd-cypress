Feature: Truckreqdetails

    I want to test Truckreqdetails page in stage

        Background: To move into truck request details page
        When I click stage Truck Request page
        And I select row
        Then User is taken to the page

        
        Scenario: To edit other information
        When I click on edit
        And I select show partner payout
        And I select currency
        And I clear potential GTV
        And I type potential GTV
        And I click on the save icon
        Then Other information should be editted

        
        Scenario: To edit truck type
        When I click on truck type edit
        And I select truck type
        And I select truck size
        And I click on the save icon in truck type
        Then Truck type should be updated successfully

        
        Scenario: To Edit expiry date and time
        When I click expiry date and time edit
        And I edit expiry date
        And I edit ETA to supply date
        And I click the save icon in expiry date and time
        Then Expiry date and time should be updated

        Scenario: To Edit route information
        When I click route information edit
        And I edit pickup station
        And I edit destination
        And I click the save icon in route information
        Then Route information should be updated

        @focus
        Scenario: To edit business information
        When I click on business information edit
        And I select business unit
        And I select business account
        And I click the save icon in business information
        Then Business information should be updated
        