Feature: Partner

    I want to add a partner

        Scenario: creating a partner
        When I enter partner page
        And I click on Add partner button
        And I click on Create partner button
        And I type in First name
        And I type in Last name
        And I type in Email address
        And I enter Business name
        And I enter Location
        And I type Phone number
        And I type password
        And I click on the Add button
        And I add to transporter list
        Then Partner should be added