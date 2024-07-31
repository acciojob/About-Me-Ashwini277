// cypress/integration/tests/test.spec.js

describe('About Me Tests', () => {
    const elementsToCheck = ['Name', 'Email', 'Profile', 'About me', 'Skills'];

    beforeEach(() => {
        cy.visit('http://localhost:3000'); // Visit your page before each test
    });

    elementsToCheck.forEach((element) => {
        it(`Test: ${element} exists`, () => {
            cy.contains(element).should('be.visible'); // Check visibility
        });
    });
});

