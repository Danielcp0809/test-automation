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

    it('Should get a item to contain a text', () => {
        cy.contains('Reading'); // get all elements tagged by input that contains First
        cy.contains('.header-wrapper', 'Widgets')
    })

    it('Should get a item to contain a parents', () => {
        cy.get('#firstName').parent(); // get all elements with id equals to firstName and its parent
        cy.get('#firstName').parents().find('label'); // get all elements with id equals to firstName and its parent and find the label element
    })
});
