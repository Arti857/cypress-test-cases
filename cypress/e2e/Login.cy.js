describe('Basic Webpage Test', () => {
    it('verify that the page title is correct', () => {
    // Step 1: Visit the webpage
     cy.visit('https://parabank.parasoft.com/parabank/index.htm')

    //Step 2: Check if the login button is visible and clickable
     
     cy.get(':nth-child(5) > .button').should('be.visible').click();

    //Step3: Verify the username field is visible
    
    cy.get(':nth-child(2) > .input')
    

    //'Verify the username field accepts input'
    cy.get(':nth-child(2) > .input')
    cy.get(':nth-child(2) > .input').type('arti');
    cy.get(':nth-child(2) > .input').should('have.value','arti')
   
   
    //verify that password field is visible
    cy.get(':nth-child(4) > .input').should('be.visible')
    

   //verify that password field is clickable
   
   cy.get(':nth-child(4) > .input').click();
   

    //verify that password field accept input
        
       
    cy.get(':nth-child(4) > .input').type('Test@123')
    cy.get(':nth-child(4) > .input').should('have.value','Test@123').clear()
    
    //verify that the if the pasword field is empty
       
   // cy.get(':nth-child(4) > .input').('   ')
    cy.get(':nth-child(4) > .input').should('have.value','be.empty')

    //verify that the login button is clickable 
      
     cy.get(':nth-child(5) > .button').click()
        
    

});
});
