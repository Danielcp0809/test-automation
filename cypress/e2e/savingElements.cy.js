describe('Saving elements', () => {
    it('Should get a item by tag', () => {
		cy.visit('/automation-practice-form');
        cy.get('input[placeholder="First Name"]');
        cy.get('input[placeholder="First Name"]').parents('form').then(($el) => {
            const inputs = $el.find('input');
            const div = $el.find('div');
            const labels = $el.find('label');

            expect(inputs.length).to.equal(15);
            expect(div.length).to.equal(70);
            expect(labels.length).to.equal(16);
            
            cy.wrap(inputs).should('have.length', 15) // using wrap, we can use cypress commands passing a JQuery element

            cy.log('Inputs length', inputs.length) // print a log in the browser

            cy.get('input[placeholder="First Name"]').debug() // print a log in the console, similar to console.log()
        })

	});
});