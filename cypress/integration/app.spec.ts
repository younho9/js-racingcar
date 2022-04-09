beforeEach(() => {
	cy.visit('/');
});

describe('app', () => {
	it('', () => {
		cy.get('div').should('be.visible');
	});
});
