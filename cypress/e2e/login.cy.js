//const { describe } = require("mocha")

describe('Sucess Login', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
  })
})

describe('Failed Login', () => {
 it('with invalid username or password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('InexistentUser')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials')  
  })

  it('username or password empty', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]')
    cy.get('input[name="password"]')
    cy.get('button[type="submit"]').click()
  
    
    // Validar mensagens "Required" nos campos 
    cy.get('.oxd-input-group__message').eq(0).should('contain', 'Required') 
    cy.get('.oxd-input-group__message').eq(1).should('contain', 'Required') 
   
  })
})
