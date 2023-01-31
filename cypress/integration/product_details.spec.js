describe('Product details', () => {

  it('renders the homepage', () => {
    cy.visit('/');
  });

  it("renders products on the page", () => {
    cy.get('.products article').should("be.visible");
  });

  it("renders product detail page by clicking on product", () => {
    cy.get('[alt="Scented Blade"]').click();
    cy.get(".product-detail").should("exist");
  });


});