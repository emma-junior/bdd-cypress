Feature: Truckrequest

    I want to test Truckrequest in stage

        Background: user is logged in and moved to truck request page
            Given I click Truck Request page
        
        Scenario: filter by channel
        When I select Whatsapp
        Then It should be filtered by Whatsapp
        When I select email
        Then It should be filtered by Email
        When I select Squad App
        Then It should be filtered by Squad App
        When I select Squad Dashboard
        Then It should be filtered by Squad Dashboard
        # When I select Customer App
        # Then It should be filtered by Customer App
        # When I select Customer Dashboard
        # Then It should be filtered by Customer Dashboard

        Scenario: search by customer
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

        
        Scenario: filter by search
        When I search for Request Id
        Then It should be filtered by Request Id
        When I search for customer
        Then It should be filtered by customer

        Scenario: To move to All Requests and Assigned Requests
        When I click on all requests
        Then It should be moved to all requests
        When I click on Assigned requests
        Then It should be moved to Assigned requests


        