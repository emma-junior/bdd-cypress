Feature: Drivers

    I want to test drivers page

        Background: User is moved to the drivers page
            When I click drivers in sidebar
            Then I should be taken to drivers page

        Scenario: User is able to add a driver
            When I click add driver
            And I enter first name
            And I enter last name
            And I enter email
            And I select country
            And I enter phone number
            And I enter secret
            And I type partner
            And I enter partner
            And I click add
            # Then It should added successfully

        @focus
        Scenario: User is able to search a driver
            When I type in my search
            Then Driver list should be filtered by my search