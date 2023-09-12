describe('Waiting for elements', () => {
    before(() => {
        cy.visit('/automation-practice-form');
    })

    it('Should wait for a 5 seconds', () => {
        cy.wait(7000);
    })

    it('Should a firstName input be visible', () => {
        cy.get('#firstName', {timeout: 6000}).then(($element) => {
            expect($element).to.be.visible;
        })
    })

    it('Should wait for a element and do a assertion', () => {
        cy.get('#firstName', {timeout: 6000}).should('be.visible');
    })

    it.only('Should wait for a element for 0 seconds', () => {
        cy.get('#firstName', {timeout: 0})
    })
})