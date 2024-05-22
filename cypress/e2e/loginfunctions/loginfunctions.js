


import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";





Given("I naviagte to URL {string}", (url)=>{
    cy.visit(url)       
})


When("I enter the username {string} in user name field", function(username ){
    cy.log('Entering user ID')
    cy.get('input[name="username"]', {timeout:3000}).should('be.empty').should('be.enabled').type(username)
})

 
Then("I enter the password {string} in password field", function(string){
    cy.log('Entering password' +Cypress.env('password')) 
// Password is passed from config env and execution logs is masked for this sensitive data.
        cy.get('#password').should('be.empty').should('be.enabled').type(Cypress.env('password'),{ log: false })

})

Then('I click on submit button', function(){
    cy.log('--------moveworkforward pass test cases-------- ')
     cy.get('.btn', {timeout:2000}).click()
})


Then ('I should navigate to homepage',function(){
    cy.wait(1000)
    cy.log('Verified that I am navigate to Home page')
    cy.xpath('//*[@class="post-title"]').contains('Logged In Successfully')
} )



Then ("I enter the username {string} in user name field from table", (username)=>{
    cy.log("I enter the username from data table ::: "+username.toString().trim())
    // Below conditions to handle blank username.
    if (!username){
        cy.get('input[name="username"]', {timeout:3000}).should('be.empty').should('be.enabled').type('{backspace}')
    }else 
    cy.get('input[name="username"]', {timeout:3000}).should('be.empty').should('be.enabled').type(username.toString().trim())
 
})


Then ("I enter the password {string} in password field from table", (password)=>{
    cy.log("I enter teh Password from data table ::: " +password)
        // Below conditions to handle blank Password.
    if (!password){
        cy.get('input[name="username"]', {timeout:3000}).should('be.empty').should('be.enabled').type('{backspace}')
    }else 
    cy.get('#password', {timeout:3000}).should('be.empty').should('be.enabled').type(password)
 
})



Then ("Verify respective login error message is displayed as Result {string}", (Result)=>{
    cy.log("I verified the respective error message is displayed for invaild loging :: " +Result)
    cy.get('#error', {timeout:3000}).should("have.text", Result)
 

})