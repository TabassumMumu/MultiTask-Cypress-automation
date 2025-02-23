/// <reference types = "cypress" />

describe('Multi-step Form Automation', () => {
    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/Multiform/#/form/profile');
    });

    it('Profile', () => {
        cy.get('input[ng-model="formData.name"]').type('John Doe');
        cy.get('input[ng-model="formData.email"]').type('john.doe@example.com');
        cy.get('.btn').click();
    });

    it('Intersest Step', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/Multiform/#/form/interests');
        cy.get('input[value="Books"]').check();
        cy.get('input[value="Movies"]').check();
        cy.get('button[ng-click="nextStep()"]').click();
        cy.url().should('include', '/form/payment');
    });

    it('Payment Step', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/Multiform/#/form/payment');
        cy.get('input[ng-model="formData.card"]').type('1234 5678 9012 3456');
        cy.get('input[ng-model="formData.cvc"]').type('123');
        cy.get('button[ng-click="submitForm()"]').click();
        cy.contains('Thanks for staying tuned!').should('be.visible');
    });
});
