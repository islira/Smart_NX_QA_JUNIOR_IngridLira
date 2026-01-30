Feature: Filtragem de Employees no módulo PIM
  Como administrador do sistema
  Quero aplicar filtros de pesquisa de employees
  Para localizar ou validar registros de trabalhadores

  Background:
    Given que estou logado no OrangeHRM com usuário "Admin" e senha "admin123"
    And acesso o módulo "PIM"
    And estou na página "Employee Information"

  Scenario: Pesquisar um employee pelo nome
    When clico para expandir os filtros de pesquisa
    And preencho o campo "Employee Name" com "Linda Anderson"
    And clico em "Search"
    Then devo visualizar os resultados contendo o employee "Linda Anderson"

  Scenario: Pesquisar um employee pelo ID
    When clico para expandir os filtros de pesquisa
    And preencho o campo "Employee Id" com "1234"
    And clico em "Search"
    Then devo visualizar os resultados contendo o employee com ID "1234"

  Scenario: Pesquisar um employee com nome inexistente
    When clico para expandir os filtros de pesquisa
    And preencho o campo "Employee Name" com "NomeInexistente"
    And clico em "Search"
    Then devo visualizar a mensagem "No Records Found"

  Scenario: Pesquisar um employee com ID inexistente
    When clico para expandir os filtros de pesquisa
    And preencho o campo "Employee Id" com "99999"
    And clico em "Search"
    Then devo visualizar a mensagem "No Records Found"
