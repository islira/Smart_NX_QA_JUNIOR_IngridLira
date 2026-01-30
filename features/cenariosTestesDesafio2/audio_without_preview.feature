Feature: Gravação de Áudio sem Pré-visualização
  Como operador
  Quero gravar e enviar ou cancelar diretamente
  Para agilizar o envio de mensagens de voz

  Scenario: Gravar e enviar diretamente sem pré-visualização
    Given o operador clicar no ícone de microfone
    And o sistema iniciar a gravação
    And o operador clicar em "Enviar" durante ou logo após a gravação
    Then o sistema deve salvar e enviar o áudio associado ao atendimento
    And não deve exibir tela de pré-visualização

  Scenario: Cancelar a gravação sem pré-visualização
    When o operador clicar no ícone de microfone
    And o sistema iniciar a gravação
    And o operador clicar em "Cancelar" durante ou logo após a gravação
    Then o sistema deve descartar o áudio gravado
    And retornar à tela de atendimento sem exibir pré-visualização
