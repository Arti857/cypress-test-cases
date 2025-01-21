describe('First cypress Test', () => {
  it('Verify the Title ', () => {
    cy.visit('https://gomeetlocals-frontend.dmlabs.in/')

    //step 2 Find the Shorts button
    cy.title().should('eq','GoMeetLocals');

    
  });
});