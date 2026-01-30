Feature: Exclusão de Employee no módulo PIM
  Como administrador do sistema
  Quero excluir um employee cadastrado
  Para manter a lista de trabalhadores atualizada

  Background:
    Given que estou logado no OrangeHRM com usuário "Admin" e senha "admin123"
    And acesso o módulo "PIM"
    And identifico o employee "Carlos Silva" na lista de employees

  Scenario: Cancelar a exclusão de um employee
    When clico no ícone de lixeira ao lado do employee "Carlos Silva"
    And clico em "Cancel" na janela de confirmação
    Then o employee "Carlos Silva" deve continuar aparecendo na lista de employees

  Scenario: Confirmar a exclusão de um employee
    When clico no ícone de lixeira ao lado do employee "Carlos Silva"
    And clico em "Yes, Delete" na janela de confirmação
    Then o employee "Carlos Silva" não deve mais aparecer na lista de employees
