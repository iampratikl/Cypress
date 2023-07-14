describe('Login to the website',function(){
    it('Veify the login functionality',function(){
        cy.visit('https://notionpress.com/en/ind/login')
        
        cy.url().should('include', 'ind/login')
        cy.wait(5000)
        cy.get('input#email').type('fake@email.com').

        cy.get('input#dpassword').type('123456789')

        cy.get('input#login').click()
    })

})