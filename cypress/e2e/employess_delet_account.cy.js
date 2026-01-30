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
  
  // Reutilizável: pesquisa por nome no filtro
  const searchByName = (name) => {
    cy.get('input[placeholder="Type for hints..."]').clear().type(name)
    cy.contains('Search').click()
  }

  beforeEach(() => {
    // Filtrar por Carlos antes de cada teste
    searchByName('Carlos')
    cy.contains('Carlos').should('exist')
  })


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
