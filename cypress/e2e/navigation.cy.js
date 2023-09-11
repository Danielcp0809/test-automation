describe('Navigation', () => {
	it('Should visit https://example.cypress.io', () => {
		cy.visit('https://example.cypress.io');
	});

	it('Should reload the page', () => {
		cy.reload();
	});

    it('Should reload the page with forced mode', () => {
        cy.visit('https://go.cypress.io/');
		cy.reload(true);
	});

    it.only('Should go to pricing page and go back', () => {
        // the navigation should happen in the same domain
        cy.visit('https://www.cypress.io/');
		cy.visit('https://www.cypress.io/pricing/');
        cy.go('back');
	});

});
