describe("Assertion demo", () => {

    before(function() {  // Use `function()` to ensure `this` is accessible
        // Load fixture data before the test runs
        
        cy.fixture('user').then((data) => {
            this.users = data;  // Store user data in `this.users`
            cy.log(this.users);  // Log to verify data is loaded correctly
        });
    });

    
    it("Implicit assertions", function() {  // Use `function()` so that `this` works properly

        // Log `this.users` to verify it has the correct data
        cy.log(this.users);

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // URL assertions
        cy.url().should('include', 'opensource-demo.orangehrmlive.com')
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain', 'opensource-demo')
            .and('not.contain', 'hero');

        // Title assertion
        cy.title().should('eq', 'OrangeHRM');

        // Username input and action
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type(this.users.username);  // Use `this.users.username` to access the fixture data

        // Password input and action
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type(this.users.password);  // Use `this.users.password` to access the fixture data

        // Submit the login form
        cy.get('.oxd-button').click();

       
    });

});
