Feature: Order

    I want to test orders page

        Background: user is logged in and moved to truck request page
            # Given I have logged in
            When I click stage orders page

        Scenario: filter by channel
        When I select Whatsapp
        Then It should be filtered by Whatsapp
        When I select email
        Then It should be filtered by Email
        When I select Squad App
        Then It should be filtered by Squad App
        When I select Squad Dashboard
        Then It should be filtered by Squad Dashboard
        When I select Customer App
        Then It should be filtered by Customer App
        When I select Customer Dashboard
        Then It should be filtered by Customer Dashboard

        
        Scenario: search by customer
        When I click stage orders page
        When I Type customer
        And I enter customer
        Then It should be filtered by my search

        
        Scenario: filter by status
        When I select open
        Then It should be filtered by open status
        When I select Accepted
        Then It should be filtered by Accepted status
        When I select Expired
        Then It should be filtered by Expired status
        # When I select Cancelled
        # Then It should be filtered by Cancelled status
        

        Scenario: filter by expiry date
        When I select Today
        Then It should be filtered by Today
        When I select Next 3 Days
        Then It should be filtered by Next 3 Days
        When I select Next 7 Days
        Then It should be filtered by Next 7 Days
        When I select Next 14 Days
        Then It should be filtered by Next 14 Days
        When I select Next 28 Days
        Then It should be filtered by Next 28 Days

        @focus
        Scenario: filter by search
        When I search for Request Id
        Then It should be filtered by Request Id
        When I search for customer
        Then It should be filtered by customer

        
        Scenario: To move to Regular, Container and bulk
        When I click on Container
        Then It should be moved to Container
        When I click on bulk
        Then It should be moved to bulk
        When I click on Regular
        Then It should be moved to regular