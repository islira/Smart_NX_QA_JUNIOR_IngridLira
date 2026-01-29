

// cypress/e2e/module_search.cy.js

describe('Pesquisa de módulos no OrangeHRM', () => {

  beforeEach(() => {
    // Login antes de cada teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    // Abrir menu principal
    cy.get('.oxd-main-menu-search').should('exist') // campo de busca no menu
  })

  it('Pesquisar o módulo “PIM”', () => {
    cy.get('.oxd-main-menu-search input').type('PIM')
    cy.contains('.oxd-main-menu-item', 'PIM').should('exist')
  })

  it('Pesquisar um módulo diferente de “PIM”', () => {
    cy.get('.oxd-main-menu-search input').type('Admin')
    cy.contains('.oxd-main-menu-item', 'Admin').should('exist')
    cy.contains('.oxd-main-menu-item', 'PIM').should('not.exist')
  })

  it('Apagar a pesquisa', () => {
    cy.get('.oxd-main-menu-search input').type('PIM')
    cy.contains('.oxd-main-menu-item', 'PIM').should('exist')

    // limpar campo
    cy.get('.oxd-main-menu-search input').clear()

    // validar que resultados foram limpos
    cy.get('.oxd-main-menu-item').should('exist') // lista padrão de módulos
  })

  it('Acessar o módulo “PIM”', () => {
    cy.get('.oxd-main-menu-search input').type('PIM')
    cy.contains('.oxd-main-menu-item', 'PIM').click()

    // validar que abriu a página correta
    cy.url().should('include', '/pim/viewEmployeeList')
    cy.contains('Employee Information').should('exist')
  })
})
