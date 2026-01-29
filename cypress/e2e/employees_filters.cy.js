// cypress/e2e/pim_employee_filter.cy.js

describe('Filtragem de Employees no módulo PIM', () => {

  beforeEach(() => {
    // Login antes de cada teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    // Acessar módulo PIM
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
  })

  it('Pesquisar um employee pelo nome', () => {
    // campo Employee Name (autocomplete)
    cy.get('oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]').type('Carlos')
    cy.contains('Search').click()

    // validar resultado
    cy.contains('Carlos').should('exist')
  })

  it('Pesquisar um employee pelo ID', () => {
    cy.get('input[placeholder="Employee Id"]').type('1234')
    cy.contains('Search').click()

    // validar resultado
    cy.contains('1234').should('exist')
  })

  it('Pesquisar um employee com nome inexistente', () => {
    cy.get('input[placeholder="Type for hints..."]').type('NomeInexistente')
    cy.contains('Search').click()

    // validar mensagem de não encontrado
    cy.contains('No Records Found').should('exist')
  })

  it('Pesquisar um employee com ID inexistente', () => {
    cy.get('input[placeholder="Employee Id"]').type('99999')
    cy.contains('Search').click()

    // validar mensagem de não encontrado
    cy.contains('No Records Found').should('exist')
  })
})
