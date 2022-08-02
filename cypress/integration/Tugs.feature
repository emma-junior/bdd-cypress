Feature: Tugs details

    I want to test tugs page

        Background: user is able to move to the tugs page and click on a tug in tug list
            When I click tug in sidebar
            And I click on a tug
            Then I should move into a tug details page

        
        Scenario: user is able to edit tug information
            When I click on tug information edit button
            And I edit tug name
            And I click on the save icon in tug information
            Then Tug name should be editted successfully

        # Scenario: user is able to edit tracker information
        #     When I select provider
        #     And I select country

        
        Scenario: User is able to edit crew information
            When I click on crew information edit
            And I edit captain name
            And I edit captain mobile
            And I edit crew member one name
            And I edit crew member one mobile
            And I edit crew member two name
            And I edit crew member two mobile
            And I click on the save icon in crew information
            Then Crew information should be editted successfully

        
        Scenario: User is able to upload driver image
            When I upload the image
            Then It should be uploaded

        @focus
        Scenario: user is able to search
            When I search a customer
            Then My search should be displayed

    