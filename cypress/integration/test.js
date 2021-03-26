describe('Pizza App', () => {
    
    beforeEach(() => cy.visit('http://localhost:3000'))

    describe('filling inputs and submit', () => {

        it('can type and see if the correct name', () => {
            cy.get('input[name=name]')
             .type('Corie Stewart')
             .should('have.value', 'Corie Stewart')
            
             cy.get('input[name=email]')
            .type('stingaree43@gmail.com')

            cy.get('input[name=phone]')
            .type('123456789')

        })
    })

})