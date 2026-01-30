 Feature: Pesquisa de módulos no OrangeHRM
  Como administrador do sistema
  Quero pesquisar módulos pelo campo de busca
  Para acessar rapidamente as funcionalidades desejadas

  Background:
    Given que estou logado no OrangeHRM com usuário "Admin" e senha "admin123"
    And abro o menu principal

  Scenario: Pesquisar o módulo “PIM”
    When digito "PIM" no campo de busca
    Then devo visualizar o módulo "PIM" listado nos resultados

  Scenario: Pesquisar um módulo diferente de “PIM”
    When digito "Dashboard" no campo de busca
    Then devo visualizar o módulo "Dashboard" listado nos resultados
    And não devo visualizar o módulo "PIM" nos resultados

  Scenario: Apagar a pesquisa
    Given que digitei "PIM" no campo de busca
    When apago o conteúdo do campo de busca
    Then os resultados da pesquisa devem ser limpos
    And devo visualizar a lista padrão de módulos do menu

  Scenario: Acessar o módulo “PIM”
    Given que pesquisei "PIM" no campo de busca
    When clico no resultado "PIM"
    Then devo ser direcionado para a página do módulo "PIM"
    And devo visualizar a seção "Employee Information"
 