// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Usage: cy.login() or cy.login('user','pass')
Cypress.Commands.add('login', (username = Cypress.env('username') || 'Admin', password = Cypress.env('password') || 'admin123') => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').clear().type(username)
    cy.get('input[name="password"]').clear().type(password, { log: false })
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command -