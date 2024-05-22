# Annotations are used to set the test suites (group of test cases)
@Regression @login_manager
Feature:  Verify the Loginn window functionality


    Scenario: Validate the acceptance test case of login window for valid credentials
       Given I naviagte to URL "https://practicetestautomation.com/practice-test-login/"
        When I enter the username "student" in user name field
        And I enter the password "Password123" in password field
        And I click on submit button
        Then I should navigate to homepage


    Scenario Outline: Validate the Negative test cases of login window with multiple set of test data
       Given I naviagte to URL "https://practicetestautomation.com/practice-test-login/"
        When I enter the username "<Username>" in user name field from table
        And I enter the password "<Password>" in password field from table
        And I click on submit button
        Then Verify respective login error message is displayed as Result "<Result>"

          Examples:
                  | Username   |    Password            |    Result                     |
    # Test scenario to verify -- valid UserName and INVALID password 
                |	  student   |   invalidPassword     |   Your password is invalid!   |
    # Test scenario to verify -- INVALID UserName and valid password 
                |	sachin      |   Password123         |   Your username is invalid!   |
    # Test scenario to verify -- Blank UserName and valid password 
                |	            |     Password123       |   Your username is invalid!   |
    # Test scenario to verify -- valid UserName and INVALID password using special chars
                |	 student    |   Password123@        |   Your password is invalid!   |    
    # Test scenario to verify -- INVALID UserName using special chars and INVALID password 
                |	 student@@@    |   Password1231        |   Your username is invalid!   |    
   # Test scenario to verify -- valid UserName  and INVALID password using special chars and numbers combinations                    
                |	 student    |   Password1231@#$@#$@#$        |   Your password is invalid!   |     
   # Test scenario to verify -- INVALID UserName  to test boundary  level testing and valid password  
                |	 studentdfsdfsdafsdafsdafsdfsdfsdfsdfsdfsdfsdfsdfsdcsdcfsd    |   Password1231        |   Your username is invalid!   |      
   # Test scenario to verify -- valid UserName  and INVALID password to test boundary  level testing
                 |	 student    |   Password1231ddf,msnfdsajkfkj342234234234@#@#@#@$45        |   Your password is invalid!   | 
   # Test scenario to verify -- INVALID UserName to test the sensitivity with space   and valid password
                 |	 stud ent   |   Password1231        |   Your username is invalid!   |      
   # Test scenario to verify -- valid UserName  and INVALID password to test the sensitivity with space  
                 |	 student   |   Passwo rd1231        |   Your password is invalid!   |    
   # Test scenario to verify -- valid UserName  and INVALID password to test the case-sensitivity  
                 |	 student   |   password123        |   Your password is invalid!   |   
   # Test scenario to verify -- valid UserName  and blank password
                |	  student   |                       |   Your password is invalid!   |

