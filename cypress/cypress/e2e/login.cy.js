describe('QuickQuote3D - Authentication', () => {
  const baseUrl = 'https://quick-quote-3d.vercel.app/login?next=%2Fplanner'; // <-- replace with your actual deployed link

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('TC_AUTH_04: should log in with valid credentials', () => {
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('Test@1234');
    cy.get('button[type="submit"]').contains('Sign in').click();

    // Adjust this assertion to match what actually happens after successful login
    cy.url().should('include', '/dashboard');
  });

  it('TC_AUTH_05: should show an error with incorrect password', () => {
    cy.get('#email').type('ubaidulhaq003@gmail.com');
    cy.get('#password').type('Sam5656@');
    cy.get('button[type="submit"]').contains('Sign in').click();

    // Adjust this to match the actual error message shown in your app
    cy.contains('Invalid').should('be.visible');
  });
});