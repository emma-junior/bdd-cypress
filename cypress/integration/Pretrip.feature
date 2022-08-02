Feature: Pretrip

    I want to add truck

        Scenario: add truck
        Given I have logged in
        And I click stage Pretrip page
        And I click on add truck
        And I select request type
        When I search customer
        And I enter customer