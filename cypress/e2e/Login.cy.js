import 'cypress-xpath'
describe('Basic Webpage Test', () => {
    it('verify that the page title is correct', () => {
    // Step 1: Visit the webpage
     cy.visit('https://parabank.parasoft.com/parabank/index.htm')

    //Step 2: Check if the login button is visible and clickable
     cy.visit('https://parabank.parasoft.com/parabank/index.htm')
     cy.xpath('//input[@value="Log In"]').should('be.visible').click();

    //Step3: Verify the username field is visible
    
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    

    //'Verify the username field accepts input'
    
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.xpath('//input[@name="username"]').type('arti');
    cy.xpath('//input[@name="username"]').should('have.value','arti')
   //verify that password field is visible
     
   cy.visit('https://parabank.parasoft.com/parabank/index.htm')
   cy.xpath('//input[@name="password"]').should('be.visible')
    

   //verify that password field is clickable
   cy.visit('https://parabank.parasoft.com/parabank/index.htm')
   cy.xpath('//input[@name="password"]').click();
   

    //verify that password field accept input
        
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.xpath('//input[@name="password"]').type('Test@123')
        cy.xpath('//input[@name="password"]').should('have.value','Test@123')
        
    

});
});
