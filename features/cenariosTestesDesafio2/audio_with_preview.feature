Feature: Gravação de Áudio com Pré-visualização
  Como operador
  Quero ouvir, regravar, cancelar ou enviar áudios
  Para validar antes de enviar ao atendimento

  Scenario: Pré-visualizar o áudio gravado
    Given o operador finalizou uma gravação
    When o operador clicar em icone para ouvir
    Then o sistema deve reproduzir o áudio gravado

  Scenario: Regravar o áudio seguindo fluxo estilo WhatsApp
    When o operador clicar em "Descartar"
    And o sistema remover o áudio da pré-visualização
    And o operador clicar novamente no ícone de microfone
    Then o sistema deve iniciar uma nova gravação

  Scenario: Regravar o áudio - em caso de existir um ícone de regravação
    Given o operador finalizou uma gravação
    When o operador clicar para gravar novamente
    Then o sistema deve descartar o áudio anterior
    And iniciar uma nova gravação

  Scenario: Cancelar o áudio
    Given o operador finalizou uma gravação
    When o operador clicar para cancelar
    Then o sistema deve descartar o áudio gravado
    And retornar ao estado inicial de gravação

  Scenario: Enviar o áudio gravado
    Given o operador finalizou uma gravação
    When o operador clicar em "Enviar"
    Then o sistema deve salvar e enviar o áudio associado ao atendimento
