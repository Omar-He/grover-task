/* eslint-disable no-undef */
describe("Renders home page", () => {
  beforeEach(() => {
    cy.visit("/clients");
  });

  it("Should render home page & view article", () => {
    cy.get("#container").should("exist");
    cy.get(
      ":nth-child(2) > .MuiTableCell-alignCenter > .MuiButton-root"
    ).click();
    cy.get("#back-list").click();
  });

  it("Should test the pagination", () => {
    cy.get('[data-testid="KeyboardArrowRightIcon"]').click();
    cy.url().should("include", "page=1");
  });

  it("Should test the searchbar", () => {
    cy.get(".MuiInputBase-input").clear();
    cy.get(".MuiInputBase-input").type("hello");
    cy.url().should("include", "search=hello");
    cy.url().should("include", "page=0");
    cy.get("#article-row").should("exist");
  });
});
