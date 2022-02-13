/* eslint-disable no-undef */
describe("Renders article page", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:3000/articles/e0dcd503-af3a-51e8-ae6d-337bf228f6fa"
    );
  });

  it("Should render article page & check elements", () => {
    cy.get("#back-list").should("exist");
    cy.get("#full-details").should("exist");
  });
  it("Should back to the list", () => {
    cy.get("#back-list").click();
    cy.url().should("include", "page=0");
  });
});
