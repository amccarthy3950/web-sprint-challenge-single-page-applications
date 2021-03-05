describe('Testing the app', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    const buttonMain = () => cy.get('.mainButton')
    const buttonSubmit = () => cy.get('#submitButton')
    const commentsInput = () => cy.get('input[name=special]')
    const nameInput = () => cy.get('input[name=name]')
    const selectInput = () => cy.get('select[name=size]')
    const sauceInput = () => cy.get('input[name=sauce]')
    const pepperoniInput = () => cy.get('input[name=pepperoni]')
    const chickenInput = () => cy.get('input[name=chicken]')
    const mushroomInput = () => cy.get('input[name=mushrooms]')

    it('check if it works', () => {
        expect(1+1).to.equal(2)
    })

    it('check if these elements exist', () =>{
        buttonMain().should('exist')
        cy.visit('http://localhost:3000/pizza')
        nameInput().should('exist')
        commentsInput().should('exist')
        selectInput().should('exist')
        sauceInput().should('exist')
        pepperoniInput().should('exist')
        chickenInput().should('exist')
        mushroomInput().should('exist')
        buttonSubmit().should('exist')

    })

    it('check if we can add text to boxes', () => {
        cy.visit('http://localhost:3000/pizza')

        nameInput()
            .should('have.value', '')
            .type('Michael')
            .should('have.value', 'Michael')
        
        commentsInput()
            .should('have.value', '')
            .type('Please make it well done')
            .should('have.value', 'Please make it well done')
    })

    it('check if we can select multiple toppings', () => {
        cy.visit('http://localhost:3000/pizza')



        pepperoniInput()
            .should('be.not.checked')
            .click()
            .should('be.checked')

        
        chickenInput()
            .should('be.not.checked')
            .click()
            .should('be.checked')


        mushroomInput()
            .should('be.not.checked')
            .click()
            .should('be.checked')

    })

    it('check if we can submit the form', () => {
        buttonMain().click() //we also check the ability of this button to navigate us to /pizza page

        buttonSubmit()
            .should('be.disabled')
        
        selectInput().select('large')

        sauceInput().first().check()
        sauceInput().first().should('be.checked')
        sauceInput().last().check()
        sauceInput().last().should('be.checked')
        sauceInput().first().should('be.not.checked')
        
        pepperoniInput()
            .should('be.not.checked')
            .click()
            .should('be.checked')
        
        chickenInput()
            .should('be.not.checked')
            .click()
            .should('be.checked')


        mushroomInput()
            .should('be.not.checked')
            .click()
            .should('be.checked')
        
        commentsInput()
        .should('have.value', '')
        .type('Please make it well done')
        .should('have.value', 'Please make it well done')

        nameInput()
            .should('have.value', '')
            .type('Michael')
            .should('have.value', 'Michael')
        
        buttonSubmit()
            .should('be.enabled')
            .click()
        
        cy.location('pathname').should('eq', '/orders') // if we redirected to  '/orders' after submitting everything is fine

        
        
    })

})