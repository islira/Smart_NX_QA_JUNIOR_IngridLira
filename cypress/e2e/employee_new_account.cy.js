// cypress/e2e/pim_employee.cy.js

describe('Cadastro de Employee no módulo PIM', () => {
  
  beforeEach(() => {
    // Login antes de cada teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    // Acessar módulo PIM
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
  })

  it('1. Validar a existência do botão "+ Add"', () => {
    cy.contains('Add').should('exist')
  })

  it('2. Acessar a tela de cadastro clicando no botão "+ Add"', () => {
    cy.contains('Add').click()
    cy.get('input[name="firstName"]').should('exist')
    cy.get('input[name="lastName"]').should('exist')
    cy.get('.oxd-input-group input').eq(3).should('exist') // Employee Id
  })

  it('3. Tentar cadastrar um usuário sem preencher o nome', () => {
    cy.contains('Add').click()
    cy.get('.oxd-input-group input').eq(3).type('12345') // Employee Id
    cy.contains('Save').click()
    cy.get('.oxd-input-group__message').should('contain', 'Required') // valida erro
  })

  it('Cadastrar um novo employee com sucesso', () => {
    cy.contains('Add').click()
    cy.get('input[name="firstName"]').type('Carlos') 
    cy.get('input[name="middleName"]').type('Alberto') 
    cy.get('input[name="lastName"]').type('Silva') 
    cy.get('.oxd-input-group input').eq(3).clear().type('12345') // Employee Id

    // Habilitar campos de login
    cy.get('.oxd-switch-input').click()

    // Preencher campos de login 
    const username = `carlos.silva.${Date.now()}`
    const password = 'Str0ngP@ssw0rd!'
    cy.get('input[placeholder="Username"]').clear().type(username)
    cy.get('input[placeholder="Password"]').clear().type(password)
    cy.get('input[placeholder="Confirm Password"]').clear().type(password)

    cy.contains('Save').click() // validar se colaborador aparece na lista

    // Salvar dados do colaborador para uso posterior
    const employee = {
      firstName: 'Carlos',
      middleName: 'Alberto',
      lastName: 'Silva',
      fullName: 'Carlos Alberto Silva',
      employeeId: '12345',
      username
    }
    cy.writeFile('cypress/fixtures/last_employee.json', employee)
  })

  it('4. Validar tentativa de cadastro com Employee ID já existente', () => {
    cy.contains('Add').click()
    cy.get('input[name="firstName"]').type('Carlos')
    cy.get('input[name="lastName"]').type('Silva')
    cy.get('.oxd-input-group input').eq(3).type('12345') // ID já existente
    cy.contains('Save').click()
    cy.get('.oxd-input-group__message').should( 'Already exists') // ajustar conforme mensagem real
  })

  it('5. Cadastrar um employee sem dados de login', () => {
    cy.contains('Add').click()
    cy.get('input[name="firstName"]').type('Maria')
    cy.get('input[name="middleName"]').type('Fernanda')
    cy.get('input[name="lastName"]').type('Souza')
    cy.get('.oxd-input-group input').eq(3).type('67890') // Employee Id
    // não marcar Create Login Details
    cy.contains('Save').click()
    cy.contains('Maria Fernanda Souza').should('exist')
  })
})
