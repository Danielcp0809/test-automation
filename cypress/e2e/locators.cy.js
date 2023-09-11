describe('Types of locators', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
	it('Should get a item by tag', () => {
		cy.visit('/automation-practice-form');
		cy.get('input'); // get all elements tagged by input
	});

	it('Should get a item by attribute', () => {
		cy.get('[placeholder="First Name"]'); // get all elements with placeholder attribute equals to First Name
	});

    it('Should get a item by attribute and tag', () => {
		cy.get('input[placeholder="First Name"]'); // get all elements with placeholder attribute equals to First Name
	});

    it('Should get a item by id', () => {
        cy.get('#firstName'); // get all elements with id equals to firstName
    }); 

    it('Should get a item by class', () => {
        cy.get('.btn'); // get all elements with class equals to btn
    });
});
