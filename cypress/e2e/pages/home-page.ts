const homePageSelectors = {
  plusButton: '[data-testid="JP"]',
  accountButton: '[data-testid="LGST"]',
};

export class HomePage {
  static visitHomePage() {
    cy.step("visit home page");
    cy.visit("/");
  }

  static verifyHomePageElements() {
    cy.step("verify home page elements");
    cy.get(homePageSelectors.plusButton).should("be.visible");
    cy.get(homePageSelectors.accountButton).should("be.visible");
  }
}
