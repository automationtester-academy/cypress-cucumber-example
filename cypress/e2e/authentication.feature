Feature: Authentification au site
    Scenario: authentification avec succès
        Given Je suis sur le site saucedemo
        When Je complete le formulaire d'authentification
        Then Je suis connecté avec succès