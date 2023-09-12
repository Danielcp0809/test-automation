describe('Assertions', () => {
    it('Should include the domain demoqa.com in the URL', () => {
        cy.visit('/automation-practice-form');
        cy.url().should('include', 'demoqa.com');
    });

    it('Should all elements with id "firstName" are visible', () => {
        cy.get('#firstName').then(($element) => {
            expect($element).to.be.visible;
        })
    })

    it('Should the firstName input have a placeholder attribute called "First Name', () => {
        cy.get('#firstName').then(($element) => {
            assert.equal($element.attr('placeholder'), 'First Name');
        })
    })
})