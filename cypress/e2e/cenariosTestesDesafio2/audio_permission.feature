
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








CENARIOS PARA PERMISSÃO E GRAVAÇÃO DE AUDIO
Cenário: Solicitação de permissão para acessar o microfone
Dado que o operador está conectado ao sistema
E que um atendimento foi direcionado para o operador
Quando o operador clicar no botão de gravação
E o sistema não possuir permissão para acessar o microfone
Então o sistema deve solicitar permissão ao operador

Cenário: Início da gravação com indicador de tempo
Dado que o operador concedeu permissão para acessar o microfone
Quando o operador clicar no botão de gravação
Então a gravação deve ser iniciada
E o sistema deve exibir um indicador de tempo decorrido


CENARIOS GRAVACAO AUDIO SEM PREVISUALIZACAO ANTES DO ENVIO

  Scenario: Gravar e enviar diretamente sem pré-visualização
    GIVEN o operador clicar no ícone de microfone
    AND o sistema iniciar a gravação
    AND o operador clicar em "Enviar" durante ou logo após a gravação
    THAN o sistema deve salvar e enviar o áudio associado ao atendimento
    E não deve exibir tela de pré-visualização

  Scenario: Cancelar a gravação sem pré-visualização
    Quando o operador clicar no ícone de microfone
    E o sistema iniciar a gravação
    E o operador clicar em "Cancelar" durante ou logo após a gravação
    Então o sistema deve descartar o áudio gravado
    E retornar à tela de atendimento sem exibir pré-visualização


CENARIOS APOS GRAVACAO E PREVISUALIZAÇÃO ANTES DO ENVIO
Cenário: Pré-visualizar o áudio gravado
Dado que o operador finalizou uma gravação
Quando o operador clicar em "Ouvir"
Então o sistema deve reproduzir o áudio gravado

Cenário: Regravar o áudio seguindo fluxo estilo WhatsApp
 Quando o operador clicar em "Descartar" 
E o sistema remover o áudio da pré-visualização 
E o operador clicar novamente no ícone de microfone 
Então o sistema deve iniciar uma nova gravação 
E não deve existir referência ao áudio anterior

Cenário: Regravar o áudio - em caso de existir um icone de regravação
Dado que o operador finalizou uma gravação
Quando o operador clicar para gravar novamente
Então o sistema deve descartar o áudio anterior
E iniciar uma nova gravação

Cenário: Cancelar o áudio
Dado que o operador finalizou uma gravação
Quando o operador clicar para cancelar
Então o sistema deve descartar o áudio gravado
E retornar ao estado inicial de gravação

Cenário: Enviar o áudio gravado
Dado que o operador finalizou uma gravação
Quando o operador clicar em "Enviar"
Então o sistema deve salvar e enviar o áudio associado ao atendimento

