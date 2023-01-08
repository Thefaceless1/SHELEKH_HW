Feature: Dropdown page

  Scenario Outline: Go to dropdown page
    Given  I'm on the <mainPage> page
    When I click on the Dropdown menu option
    Then Page <dropdownPage> is opened
    Examples:
      | mainPage                           | dropdownPage                                |
      | https://the-internet.herokuapp.com | https://the-internet.herokuapp.com/dropdown |

  Scenario Outline: Dropdown default value
    Given  I'm on the <dropdownPage> page
    Then Displayed dropdown value is <defaultOption>
    Examples:
    | dropdownPage                                | defaultOption           |
    | https://the-internet.herokuapp.com/dropdown | Please select an option |

  Scenario Outline: Selected dropdown value is displayed
    Given I'm on the <dropdownPage> page
    When I click on the dropdown and select <option1>
    Then Displayed dropdown value is <option1>
    When I click on the dropdown and select <option2>
    Then Displayed dropdown value is <option2>
    Examples:
      | dropdownPage                                | option1  | option2  |
      | https://the-internet.herokuapp.com/dropdown | Option 1 | Option 2 |