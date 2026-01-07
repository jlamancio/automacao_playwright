# automacao_playwright

Objetivo : Criação de portfólio de automação do fluxo de testes do site: saucedemo.com

Tecnologias:

Linguagem: JavaScript
Engine: Node JS
Gerenciador de dependências: Npm
Framework: Playwright

Procedimentos para SETUP do projeto:

playwright; npm init playwright@latest

Comandos importantes do playwright:

npx playwright test: Runs the end-to-end tests.
npx playwright test --ui: Starts the interactive UI mode.
npx playwright test --project=chromium: Runs the tests only on Desktop Chrome.
npx playwright test example: Runs the tests in a specific file.
npx playwright codegen: Auto generate tests with Codegen.

Suite: Automation Login:
CT1 - Login with valid credentials.
CT2 - Login with valid credentials (Uppercase)
CT3 - Login with invalid User and valid Passowrd
CT4 - Login with valid User and invalid Passowrd
CT5 - Login with invalid credentials
CT6 - Login with empty User and valid Password
CT7 - Login with valid Userd and empty Password
CT8 - Login with empty User and Password
 

