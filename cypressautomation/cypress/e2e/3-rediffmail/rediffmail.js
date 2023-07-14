import {When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("precondition",()=>{
    cy.visit("https://mail.rediff.com/cgi-bin/login.cgi")

})

When("action",()=>{
cy.title().should('eq', 'Rediffmail')
})

Then("testable outcome",()=>{
cy.get('input#login1').type('pratiklenekar')
cy.get('input#password').type('Nagpur@2022')
cy.get('input.signinbtn').click()

})