Feature: Barge Request

    I want to test Barge request

        Background: user is moved to barge request page
            When I click barge Request page
            And I search for a barge request
            When I click on a barge list
            Then I should be taken to barge detail page

         
        Scenario: search by container id in cargo information
            When I type for container id
            Then It should be filtered by container id

        
        Scenario: user is able to view trips
            When I click on view trips
            Then I should see the barge trips or no trips found

        Scenario: user is able to move out from barge detail page
            When I click on the cancel button
            Then I should move to the barge request list page

       
        Scenario: user is able to filter by a search
            When I click on the cancel button
            And I type in a request id
            Then It should be filtered by request id
