//Favorites E2E test
describe("<Favorites />", () => {
  beforeEach(() => {
    //Add two meetups to Favorites
    cy.visit("http://localhost:3000/");
    cy.get("[data-testid=add-to-favorites-button]").first().click();
    cy.get("[data-testid=add-to-favorites-button]").last().click();
  });

  it("removes one item from the Favorite view", () => {
    //Navigate to `My Favorites` view
    cy.get("[data-testid=favorites-link]").click({ force: true });

    //Displays the title
    cy.get("[data-testid=favorite-title]").should(
      "have.text",
      "Favorites Page"
    );

    //Badge should have value 2
    cy.get("[data-testid=badge-value]").should("have.text", 2);

    //Remove the last Favorite Meetup
    cy.get("[data-testid=remove-from-favorite-button]").last().click();

    //Badge should have value 1
    cy.get("[data-testid=badge-value]").should("have.text", 1);
  });
});
