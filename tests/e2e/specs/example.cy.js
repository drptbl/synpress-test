describe("test spec", () => {
  it("renders the text", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Learn React").should("exist");
  });
});
