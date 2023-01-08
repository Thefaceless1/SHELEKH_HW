Feature: Key presses page
  Scenario Outline: Go to key_presses page
    Given  I'm on the <mainPage> page
    When I click on the Key Presses menu option
    Then Page <Key Presses> is opened
    Examples:
      | mainPage                           | Key Presses                                   |
      | https://the-internet.herokuapp.com | https://the-internet.herokuapp.com/key_presses|

  Scenario Outline: Entered symbols are displayed in the input
    Given I'm on the <Key Presses> page
    When I type <symbols> in the input
    Then <symbols> are displayed in the input
    Examples:
      | Key Presses                                    | symbols     |
      | https://the-internet.herokuapp.com/key_presses | testWord    |
      | https://the-internet.herokuapp.com/key_presses | newWord123  |

  Scenario Outline: The name of the pressed key is displayed on the screen
    Given I'm on the <Key Presses> page
    When I press <key> in the input
    Then The name of the pressed <key> is displayed on the screen
    Examples:
      | Key Presses                                    | key          |
      | https://the-internet.herokuapp.com/key_presses | a            |
      | https://the-internet.herokuapp.com/key_presses | 5            |
      | https://the-internet.herokuapp.com/key_presses | l            |