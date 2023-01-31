

describe('Homepage', () => {

  it('renders the homepage', () => {
    cy.visit('/');
  });

  it("renders products on the page", () => {
    cy.get('.products article').should("be.visible");
  });

  it("There is 2 products on the page", () => {
    cy.get(".products article").should("have.length", 2);
  });
});