beforeEach(() => {
	Cypress.on('uncaught:exception', (err, runnable) => {
		return false;
	});});

describe('Interacting with elements', () => {
	beforeEach(() => {
		cy.visit('/buttons');
	});

	it('Should perform a click in the button and show a message', () => {
		cy.get('button').eq(3).click(); // eq() is used to select a specific element from a list of elements, index start in 1
		cy.get('#dynamicClickMessage').should('be.visible');
		cy.get('#dynamicClickMessage').should(
			'have.text',
			'You have done a dynamic click'
		);
	});

	it('Should perform a double click in the button and show a message', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('be.visible');
		cy.get('#doubleClickMessage').should(
			'have.text',
			'You have done a double click'
		);
	});

	it('Should perform a right click in the button and show a message', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('be.visible');
		cy.get('#rightClickMessage').should(
			'have.text',
			'You have done a right click'
		);
	});
});

describe('Dynamic properties page', () => {
	it('Should click a button when it is enabled', () => {
		cy.visit('/dynamic-properties');
		cy.get('#enableAfter').click({ timeout: 0, force: true });
	});
});

describe('Interacting with inputs', () => {
	beforeEach(() => {
		cy.visit('/automation-practice-form');
	});

	it('Should type a text in the input', () => {
		cy.get('#firstName').type('Daniel');
		cy.get('#firstName').should('have.value', 'Daniel');

		cy.get('#lastName').type('Cordova');
		cy.get('#lastName').should('have.value', 'Cordova');
	});

	it('Should type a text in the input and rewrite it', () => {
		cy.get('#firstName').type('Daniel');
		cy.get('#firstName').type('{selectall}{backspace}'); // selectall is used to select all the text in the input
		cy.wait(1000);
		cy.get('#firstName').type('Jose');
		cy.get('#firstName').clear(); // selectall is used to select all the text in the input
	});

	it('Should interact with checkboxes and radio buttons', () => {
		// radio buttons
		// cy.get('#gender-radio-1').click({force: true}); // not recommended
		cy.get('label[for="gender-radio-1"]').click(); // working with radio buttons, we should click on the label

		//checkboxes
		// cy.get('#hobbies-checkbox-1').check({force: true}); // not recommended
		// cy.wait(2000);
		// cy.get('#hobbies-checkbox-1').uncheck({force: true});

		cy.get('label[for="hobbies-checkbox-1"]').click(); // one click to check
		cy.wait(1000);
		cy.get('label[for="hobbies-checkbox-1"]').click(); // another click to uncheck
	});
});

describe('Extracting data from elements', () => {
	beforeEach(() => {
		cy.visit('/automation-practice-form');
	});

	it('Should get the value from an input', function() {
		cy.get('#firstName').as('name')
		cy.get('@name').type('Daniel');

		cy.get('@name').then($name => {
			expect($name.val()).to.be.equal('Daniel');
		})
 
		cy.get('@name').invoke('val').as('firstNameValue') // invoke is used to get the value of an element, and save it in an alias that will be shared across the test
	});

	it('Should fill the fistName input with the previous test data', function() {
		cy.get('#firstName').as('name')
		cy.get('@name').type(this.firstNameValue);
		cy.get('@name').should('have.value', 'Daniel');
	});

})

describe('Interacting with dropdowns', () => {
	beforeEach(() => {
		cy.visit('/select-menu');
	});

	it('Should select an option from a dropdown (select)', () => {
		cy.get('#oldSelectMenu').select(2).should('have.value', 2); // select by index
		cy.get('#oldSelectMenu').select('Green').should('have.value', 2); // select by label
	});

	it('Should select an option from a advanced dropdown (select + input)', () => {
		cy.get('#selectOne').click()
		cy.get('#react-select-3-option-0-0').click();
	});

});

describe('Interacting with tables', () => {
	beforeEach(() => {
		cy.visit('https://www.w3schools.com/html/html_tables.asp');
	});

	it.only('Should get the value from a table header', () => {
		cy.get('#customers').find('th').each(($el) => {
			cy.log($el.text())
		})

		cy.get('#customers').find('th').first().invoke('text').should('equal', 'Company')
		cy.get('#customers').find('th').eq(1).invoke('text').should('equal', 'Contact')
		cy.get('#customers').find('th').eq(2).invoke('text').should('equal', 'Country')
	});

	it.only('Should get the number of rows', () => {
		cy.get('#customers').find('tr').should('have.length', 7)
	});

	it.only('Should get data for an specific cell', () => {
		cy.get('#customers').find('tr').eq(1).find('td').eq(1).invoke('text').should('equal', 'Maria Anders')
	});
});
