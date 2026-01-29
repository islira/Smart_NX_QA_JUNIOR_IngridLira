// cypress/e2e/pim_employee_delete.cy.js

describe('Exclusão de Employee no módulo PIM', () => {

  beforeEach(() => {
    // Login antes de cada teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    // Acessar módulo PIM
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
  })

  it('Cancelar a exclusão de um employee', () => {
    // Localizar o employee (ajuste o nome conforme o cadastro existente)
    cy.contains('Carlos Silva')
      .parents('.oxd-table-card')
      .within(() => {
        cy.get('.oxd-button.oxd-button--medium.oxd-button--label-danger.orangehrm-button-margin').click() // ícone de lixeira
      })

    // Cancelar exclusão
    cy.contains('Cancel').click()

    // Validar que o employee continua na lista
    cy.contains('Carlos Silva').should('exist')
  })

  it('Confirmar a exclusão de um employee', () => {
    // Localizar o employee (ajuste o nome conforme o cadastro existente)
    cy.contains('Carlos Silva')
      .parents('.oxd-table-card')
      .within(() => {
        cy.get('i.bi-trash').click()
      })

    // Confirmar exclusão
    cy.contains('Yes, Delete').click()

    // Validar que o employee não aparece mais na lista
    cy.contains('Carlos Silva').should('not.exist')
  })
})
