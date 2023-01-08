Feature: Login page
  Scenario Outline: Go to login page
    Given  I'm on the <mainPage> page
    When I click on the Form Authentication menu option
    Then Page <Login page> is opened
    Examples:
      | mainPage                           | Login page                               |
      | https://the-internet.herokuapp.com | https://the-internet.herokuapp.com/login |

  Scenario Outline: Login with valid data
    Given I'm on the <Login page> page
    When I fill Username and Password fields with <data>
    And I click on the Login button
    Then Page <Secure page> is opened
    And Message 'You logged into a secure area!' is displayed
    Examples:
      | Login page                               | data                          | Secure page                               |
      | https://the-internet.herokuapp.com/login | tomsmith SuperSecretPassword! | https://the-internet.herokuapp.com/secure |

  Scenario Outline: Login with invalid data
    Given I'm on the <Login page> page
    When I fill Username and Password fields with <data>
    And I click on the Login button
    Then Message 'Your username is invalid!' is displayed
    Examples:
      | Login page                               | data                          |
      | https://the-internet.herokuapp.com/login | invalid invalidPas            |