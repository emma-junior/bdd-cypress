Feature: Tracker management

    I want to test tracker management page

        Background: user is able to move into the tracker management page
            When I click tracker management in sidebar
            Then I should move into the tracker management page

        Scenario: Verifying the store table contains the right columns
            When I click on the store button
            And User should be moved to the store tab
            And Tracker inventory ID column should be visible
            And Tracker Provider column should be visible
            And Tracker imei column should be visible
            And Store location column should be visible
            And Status column should be visible
            Then in-store Date column should be visible

        
        Scenario: User is able to update status of a tracker in tracker list from store
            When I click on the store button
            And I click on the check box of a tracker in tracker list
            Then The Update Status button should be visible
            When I Click on the update status button
            Then An update Status modal should appear
            When I select dispatch
            Then A dropdown with some input fields should appear
            When I select field officer
            And I select business unit
            And I select store location
            And I click on update status
            Then Tracker status should be updated

        
        Scenario: Verifying the field table contains the right columns
            When I click on the field button
            And User should be moved to the field tab
            And Tracker inventory ID column should be visible
            And Tracker Provider column should be visible
            And Tracker imei column should be visible
            And Status column should be visible
            And Field officer column should be visible
            And Current location column should be visible
            And Dispatched Date column should be visible
            Then Recieved Date column should be visible
        
        
        Scenario: User is able to update status of a tracker in tracker list from field
            When I click on the field button
            And I click on the check box of a tracker in tracker list
            Then The Update Status button should be visible
            When I Click on the update status button
            Then An update Status modal should appear
            When I select decommissioned
            Then A dropdown with some input fields should appear
            When I select store location
            And I select reason
            And I enter additional info
            And I click on update status
            Then Tracker status should be updated

        
        Scenario: Verifying the decommissioned table contains the right columns
            When I click on the decommissioned button
            And User should be moved to the decommissioned tab
            And Tracker inventory ID column should be visible
            And Tracker Provider column should be visible
            And Tracker imei column should be visible
            And Store location column should be visible
            # And Decommissioned reason column should be visible
            And Decommissioned by column should be visible
            Then Decommissioned Date column should be visible

        
        Scenario: User is able to update status of a tracker in tracker list from decommissioned
            When I click on the decommissioned button
            And I click on the check box of a tracker in tracker list
            Then The Update Status button should be visible
            When I Click on the update status button
            Then An update Status modal should appear
            When I select lost
            Then A dropdown for lost info field should appear
            When I enter lost info
            And I click on update status
            Then Tracker status should be updated

        @focus
        Scenario: Verifying the lost table contains the right columns
            When I click on the lost button
            And User should be moved to the lost tab
            And Tracker inventory ID column should be visible
            And Tracker Provider column should be visible
            And Tracker imei column should be visible
            And Lost info column should be visible
            Then Lost Date column should be visible

        @focus
        Scenario: User is able to update status of a tracker in tracker list from lost
             When I click on the lost button
            And I click on the check box of a tracker in tracker list
            Then The Update Status button should be visible
            When I Click on the update status button
            Then An update Status modal should appear
            When I select restore
            Then A dropdown for store location field should appear
            When I select store location
            And I click on update status
            Then Tracker status should be updated

        
        Scenario: Verifying the rent table contains the right columns
            When I click on the rent button
            And User should be moved to the rent tab
            And Tracker inventory ID column should be visible
            And Tracker Provider column should be visible
            And Tracker imei column should be visible
            And Tracker msisdn column should be visible
            And Status column should be visible
            And Date created column should be visible
            Then Actions column should be visible

        
        Scenario: User is able to move into tracker detail page and out
            When I click on the store button
            And I click on the tracker detail icon in the action column of a tracker
            And I moved into the tracker detail page
            Then I should be able to view tracker info
            When I click the back button
            Then I should move into the tracker management page
        
        Scenario: User is able to search
            When I type in my search
            Then It should be filtered by my search

        
        Scenario: User can filter by tracker provider
            And I click on the all filters button
            Then A select store category modal should come up
            When I select Provider
            And I click on the apply button
            Then Tracker should be filtered by the selected Tracker provider

        Scenario: User can filter by tracker type
            When I reset the filters
            And I click on the all filters button
            Then A select store category modal should come up
            When I select tracker type
            And I click on the apply button
            # Then Tracker should be filtered by the selected Tracker type

        
        Scenario: User can filter by store location
            When I reset the filters
            And I click on the all filters button
            Then A select store category modal should come up
            When I select store location to filter
            And I click on the apply button
            Then Tracker should be filtered by the selected store location

    
        Scenario: User can filter by Status
            When I reset the filters
            And I click on the all filters button
            Then A select store category modal should come up
            When I select Status to filter
            And I click on the apply button
            Then Tracker should be filtered by the selected Status

        Scenario: User is able to add tracker
            When I click on the add tracker button
            And I select Provider
            And I select store location to add tracker
            And I select tracker type
            And I select ownership
            And I enter imei number
            And I enter msisdn number
            And I click on the save tracker button
            Then Tracker should be added


