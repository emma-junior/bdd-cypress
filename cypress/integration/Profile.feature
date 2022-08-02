Feature: Profile

    I want to edit profile in stage

        Scenario: stage Profile
        Given I have logged in
        When I click stage Profile page
        And I click on Edit button
        And I clear newFullname
        And I type in newFullname
        And I select department
        And I click on save button
        Then Your validation should be shown