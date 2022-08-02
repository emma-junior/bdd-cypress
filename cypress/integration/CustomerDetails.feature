Feature: Customer details

    I want to test Customer details page

        Background: user is able to move to customer page and click on a customer in list
            When I click customer in sidebar
            And I click on a customer
            Then I should move into the customer details page

        Scenario: user is able to edit general information
            When I click on the edit in general information
            And I edit business name
            And I select country
            And I edit registeration No
            And I edit location
            And I edit tax number
            And I click on the save icon in general information
            Then General information should be editted successfully

        Scenario: Business account owner
            When I click on add account
            And I enter business account description
            And I click on the submit button
            Then business account should be added

        Scenario: Bank configuration
            When I click on the edit button in bank configuration
            And I select country in bank configuration
            And I select bank name
            And I click on the save icon in bank configuration
            Then Bank configuration should be editted successfully
        
        Scenario: User is able to upload a customer image
            When I upload the image
            Then It should be uploaded
        
        Scenario: User is able to add contact in request channel
            When I click on the plus icon
            And I enter email
            And I enter phone No
            And I click on add contact
            Then Contact should be added successfully
        
        Scenario: User is able to edit a contact in request channel
            When I click on a contact edit in request channel
            And I edit email
            And I edit phone No
            And I click on update contact
            Then Contact should be updated successfully

        Scenario: User is able to delete a contact in request channel
            When I click on a contact delete icon in request channel
            And I confirm delete on request channel
            Then Contact should be deleted

        Scenario: User is able to deactivate and activate driver account
            When I click on the activate and deactivate button
            And I click the ok button
            Then Account should be deactivated
            When I click on the activate and deactivate button
            And I click the ok button
            Then Account should be activated

        @focus
        Scenario: User is able to activate and deactivate trip report in manage users
            When I click on manage users
            Then I should be taken to the customers user management page
            When I click on a trip report activate and deactivate button
            Then The user truck report should be activated
            When I click on a trip report activate and deactivate button
            Then The user truck report should be deactivated

        Scenario: User is able to add user in manage users
            When I click on the add user button
            And I select business unit
            And I type in first name
            And I type in last name
            And I type in email adress
            And I type in designation
            And I select country
            And I type in the user phone No
            And I type in the user password
            And I click the add user button
            Then User should be added successfully