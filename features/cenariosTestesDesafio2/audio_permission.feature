
Feature: Permissão e Gravação de Áudio
  Como operador
  Quero obter permissão e iniciar gravações
  Para enviar mensagens de voz durante o atendimento

  Scenario: Solicitação de permissão para acessar o microfone
    Given o operador está conectado ao sistema
    And um atendimento foi direcionado para o operador
    When o operador clicar no botão de gravação
    And o sistema não possuir permissão para acessar o microfone
    Then o sistema deve solicitar permissão ao operador

  Scenario: Início da gravação com indicador de tempo
    Given o operador concedeu permissão para acessar o microfone
    When o operador clicar no botão de gravação
    Then a gravação deve ser iniciada
    And o sistema deve exibir um indicador de tempo decorrido