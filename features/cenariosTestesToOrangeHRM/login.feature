Feature: Login no OrangeHRM
  Como administrador
  Quero realizar login no sistema
  Para acessar as funcionalidades disponíveis

  Scenario: Login com sucesso
    Given o usuário está na página de login do OrangeHRM
    When o usuário informar "Admin" no campo username
    And o usuário informar "admin123" no campo password
    And clicar no botão "Login"
    Then o sistema deve autenticar o usuário
    And redirecionar para a página inicial do OrangeHRM

  Scenario: Login sem fornecer usuário e senha
    Given o usuário está na página de login do OrangeHRM
    When o usuário clicar no botão "Login" sem informar username ou password
    Then o sistema deve exibir a mensagem de erro "Required"

  Scenario: Login com credenciais inválidas
    Given o usuário está na página de login do OrangeHRM
    When o usuário informar "usuarioInvalido" no campo username
    And o usuário informar "senhaInvalida" no campo password
    And clicar no botão "Login"
    Then o sistema deve exibir a mensagem de erro "Invalid credentials"
