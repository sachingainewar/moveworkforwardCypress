# MoveWorkForward Assignment 
         --- Thanks for the opportunity 

### Brief :
 1. Test project is develop using cypress + JS using cucumber framework.
 2. Tested the login window application by using different testing techniques with simplified and Readable ways. 
 3. I choose the demo application of login window from internet.
 4. Different test scenarios are accommodate in simple single test case using data parametrizations. 



### How to Install Project? 
1. Install VSCode for Cypress IDE 
2. Install nodejs and npm package
3. Install Cypress and other supporting plugins 
        npm install 



### How to run the test case ?
1. From terminal execute the following command and it will run all the test cases.
        npx cypress run 
2. From terminal execute the following command and it will open cypress executor 
        npx cypress open
2.1 select the desire browser (chrome ) for e2e testing  
2.3 And Manually click on "Loginfunctions.feature" link all the test cases runs.



### Notes:
#### some bullets points:
1.  To avoid multiple time importing cypress and supporting plugin libraries, It is imported in e2e.js file only once.
2.  One last test case are intentionally failed to show the behaviour of failed test cases.
3. For failed test cases screenshot capture and store in "screenshot" folder generated on runtime.
4. All Failed test cases are re-run once.
5. Simple Gherkin language is used to increase readability.
6. Sensitive data is passed from Config file and It is also masked on execution logs.


