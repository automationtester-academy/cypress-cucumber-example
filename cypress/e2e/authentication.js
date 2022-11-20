import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Je suis sur le site saucedemo", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("Je complete le formulaire d'authentification", () => {
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').should("not.be.disabled").click();
});

Then("Je suis connecté avec succès", () => {
  cy.url().should("include", "inventory.html");
  cy.get(".inventory_item").should("have.length", 6);
});
