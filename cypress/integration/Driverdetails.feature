Feature: Driver Details

    I want to test driver details page

        Background: user is able to move to driver page and click on a driver in list
            When I click drivers in sidebar
            And I click on a driver
            Then I should move into the driver details page

        
        Scenario: User is able to edit driver information
            When I click on the edit for driver information
            And I edit first name
            And I edit last name
            And I edit phone number
            And I click on the save icon in driver information
            Then driver information should be editted successfully
            
        
        Scenario: User is able to edit driver document
            When I click on the edit for driver documents
            And I edit the license number
            And I select expiry Date
            And I click on the save icon in driver document
            Then driver document should be editted successfully

        
        Scenario: User is able to edit partner information
            When I click on the edit for partner information
            And I edit partner business name
            And I click on the save icon in partner information
            Then partner information should be editted successfully

        
        Scenario: User is able to deactivate and activate driver account
            When I click on the activatedeactivate button
            And I click the ok button
            Then account should be deactivated
            When I click on the activatedeactivate button
            And I click the ok button
            Then account should be activated
        
        Scenario: User is able to toggle USSD training
            When I click on the ussd toggle button
            Then ussd training should be not trained
            When I click on the ussd toggle button
            Then ussd training should be trained

        Scenario: User is able to toggle app training
            When I click on the app training toggle button
            Then app training should be trained
            When I click on the app training toggle button
            Then app training should be not trained

        
        Scenario: User is able to upload driver image
            When I upload the image
            Then It should be uploaded