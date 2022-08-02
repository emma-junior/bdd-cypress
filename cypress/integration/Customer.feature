Feature: Customer

    I want to test customer page in stage

        Scenario: To Create a new customer
        When I click the customer page in sidebar
        And I click on add customer
        And I click on create customer
        And I type in Business name
        And I select country
        And I type in location
        And I type in customer alias
        And I click on the next button
        Then Validate user taken to contact person form
        And I type in first name
        And I type in last name
        And I type in phone number
        And I type in email address
        And I type in password
        And I type in confirm password
        And I click on the create customer button
        Then Customer should be created successfully
        