describe('Interacting with elements', () => {
	beforeEach(() => {
		cy.visit('/buttons');
	});

	it('Should perform a click in the button and show a message', () => {
		cy.get('button').eq(3).click(); // eq() is used to select a specific element from a list of elements, index start in 1
		cy.get('#dynamicClickMessage').should('be.visible');
		cy.get('#dynamicClickMessage').should('have.text','You have done a dynamic click');
	});

	it('Should perform a double click in the button and show a message', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('be.visible');
		cy.get('#doubleClickMessage').should('have.text','You have done a double click');
	});

	it('Should perform a right click in the button and show a message', () => {
        cy.get('#rightClickBtn').rightclick();
        cy.get('#rightClickMessage').should('be.visible');
        cy.get('#rightClickMessage').should('have.text','You have done a right click');
    });
});

describe('Dynamic properties page', () => {
    it('Should click a button when it is enabled', () => {
        cy.visit('/dynamic-properties');
        cy.get('#enableAfter').click({timeout: 0, force: true})
    })
})
