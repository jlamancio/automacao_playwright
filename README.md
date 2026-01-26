 <div style="background-color:#e7efee; padding:10px; border-radius:2px;">
 
#  Automação Playwright

## Objetivo : Criação de portfólio de automação do fluxo de testes do site: saucedemo.com

## 🛠️Tecnologias:

* Linguagem: JavaScript
* Engine: Node JS
* Gerenciador de dependências: Npm
* Framework: Playwright

## ⚙️Instalação do Framework para criação de um projeto do zero:
* npm init playwright@latest

## ⚙️SETUP do projeto:

Após clonar o repositório instalar o framework e as dependências do projeto:

* npm install


## ▶️Como executar os testes:

* npx playwright test: Runs the end-to-end tests.
* npx playwright test --ui: Starts the interactive UI mode.
* npx playwright test --project=chromium: Runs the tests only on Desktop Chrome.
* npx playwright test example: Runs the tests in a specific file.
* npx playwright codegen: Auto generate tests with Codegen.
* npx playwright test --repeat-each=n: repeat each test N times. It's used to identify flaky tests.

## 🖥️Suite: Automation Login:
* ✅CT1 - Login with valid credentials.
* ✅CT2 - Login with valid credentials (Uppercase)
* ✅CT3 - Login with invalid User and valid Password
* ✅CT4 - Login with valid User and invalid Password
* ✅CT5 - Login with invalid credentials
* ✅CT6 - Login with empty User and valid Password
* ✅CT7 - Login with valid User and empty Password
* ✅CT8 - Login with empty User and Password

 ##
 ## 📁 Estrutura do Projeto:

###   automacao_playwright/
              ├── pages/
              │   └── LoginPage.js       # Classe Page Object com seletores e métodos de login
              ├── tests/
              │   └── login.spec.js      # Suíte de testes da funcionalidade de Login
              ├── .env                   # Variáveis de ambiente (URLs e Credenciais)
              ├── .gitignore             # Arquivos ignorados (node_modules, .env, test-results)
              ├── playwright.config.js   # Configurações globais do framework
              └── package.json           # Dependências e scripts do projeto (ES Modules)

              

## 🏗️ Arquitetura do projeto:


 </div>