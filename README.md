# Teste QA Ingrid

Projeto de automação de testes usando Cypress para validar funcionalidades da aplicação alvo.

**Estrutura principal**
- `cypress/e2e/` - especificações de teste (ex.: `login.cy.js`, `PIM.cy.js`).
- `cypress/fixtures/` - dados de teste.
- `cypress/support/` - comandos e configurações comuns.

**Pré-requisitos**
- Node.js (versão apartir de 18 recomendada)
- npm (apartir da versão 9 )

**Instalação**
1. Abra um terminal na raiz do projeto.
2. Instale dependências:

```bash
npm install
```

**Executando os testes**
- Abrir a interface interativa do Cypress:

```bash
npx cypress open
```

- Rodar todos os testes em modo headless:

```bash
npx cypress run
```

- Rodar um arquivo específico (exemplo):

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

```json
"scripts": {
  "cypress:open": "cypress open",
  "cypress:run": "cypress run"
}
```

- Se for usar repositório remoto, configure SSH ou HTTPS conforme suas preferências.


