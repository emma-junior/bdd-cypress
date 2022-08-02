Feature: Barges

    I want to test barges page

        Background: user is able to move to the barges page and click on a barge in barge list
            When I click barges in sidebar
            And I click on a barge
            Then I should move into a barge details page
        
        
        Scenario: Add Barge Schedule
            When I click on add barge schedule 
            And I select a terminal
            And I select Date 
            And I select FROM
            And I select TO
            And I click the add schedule button
            Then Barge schedule should be added

        
        Scenario: Tug Information
            When I select tug 
            And I click the match with barge button
            Then It should be matched

        
        Scenario: User is able to disable and activate the activation button
            When I click on the activate and disable button
            Then It should be disabled
            When I click on the activate and disable button
            Then It should be activated

        
        Scenario: User is able to view trips
            When I click on view trips
            Then I should see trips if any and no trips found if there isn't

        
        Scenario: User is able to search
            When I click barges in sidebar
            And I search for a barge list
            Then It should be filtered by my search

        @focus
        Scenario: User is able to view trips from barge list
            When I click barges in sidebar
            And I click on view trips in barge list
            Then I should see trips if any and no trips found if there isn't


        