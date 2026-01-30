Feature: Cadastro de Employee no módulo PIM
  Como administrador do sistema
  Quero validar diferentes comportamentos ao cadastrar um employee
  Para garantir a consistência e integridade dos dados

  Background:
    Given que estou logado no OrangeHRM com usuário "Admin" e senha "admin123"
    And acesso o módulo "PIM"

  Scenario: Validar a existência do botão “+ Add”
    When estou na página "Employee Information"
    Then devo visualizar o botão "+ Add"

  Scenario: Acessar a tela de cadastro de usuário clicando no botão “+ Add”
    When clico no botão "+ Add"
    Then devo visualizar a tela de cadastro de employee
    And devo visualizar os campos "First Name", "Middle Name", "Last Name" e "Employee Id"

  Scenario: Tentar cadastrar um usuário sem preencher o nome
    When clico no botão "+ Add"
    And não preencho os campos "First Name", "Middle Name" e "Last Name"
    And preencho o campo "Employee Id" com "12345"
    And clico em "Save"
    Then devo visualizar a mensagem de erro "Required" para os campos de nome

  Scenario: Validar tentativa de cadastro com “Employee ID” já existente
    Given que já existe um employee cadastrado com Employee Id "12345"
    When clico no botão "+ Add"
    And preencho o campo "First Name" com "Carlos"
    And preencho o campo "Last Name" com "Silva"
    And preencho o campo "Employee Id" com "12345"
    And clico em "Save"
    Then devo visualizar a mensagem de erro indicando que o Employee Id já existe

  Scenario: Cadastrar um employee sem dados de login
    When clico no botão "+ Add"
    And preencho o campo "First Name" com "Maria"
    And preencho o campo "Middle Name" com "Fernanda"
    And preencho o campo "Last Name" com "Souza"
    And preencho o campo "Employee Id" com "67890"
    And não marco a opção "Create Login Details"
    And clico em "Save"
    Then devo visualizar o cadastro do employee "Maria Fernanda Souza" com sucesso
