describe('App', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it('loads the home page', () => {
    cy.visit('/');
    cy.get('#app').should('exist');
  });

  it('shows the navbar with correct links', () => {
    cy.visit('/');
    cy.get('nav').should('exist');
    cy.contains('Pulau Sebuku GIS').should('exist');
    cy.contains('Home').should('exist');
    cy.contains('Data').should('exist');
  });

  it('navigates to data page', () => {
    cy.visit('/');
    cy.contains('Data').click();
    cy.url().should('include', '/data');
    cy.contains('Under Maintainance').should('exist');
  });
});
