
describe('myfirstproject',function(){

    it('verify tite is positive',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
    })

    describe('myfirstproject',function(){

        it('verify title is negative',function(){
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.title().should('eq','OrangeHRM123')
        })  
    })
})