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
* npx playwright test --repeat-each=n: repeat each test N times. It's used to identify flaky test

## 🖥️Suite: Automation Login:
* ✅CT1 - Login with valid credentials.
* ✅CT2 - Login with valid credentials (Uppercase)
* ✅CT3 - Login with invalid User and valid Password
* ✅CT4 - Login with valid User and invalid Password
* ✅CT5 - Login with invalid credentials
* ✅CT6 - Login with empty User and valid Password
* ✅CT7 - Login with valid User and empty Password
* ✅CT8 - Login with empty User and Password

## 🖥️Suite: Checkout - End to End (E2E):
* ✅CT1 - Should complete a purchase starting from the inventory page.


## 🖥️Suite: Checkout Negative Scenarios:
* ✅CT1 - Validate missing first name error message.
* ✅CT2 - Validate missing last name error message.
* ✅CT3 - Validate missing zip/postal code error message.


 ## 📁 Estrutura do Projeto:

##  C:\Cursos\automacao_playwright
                ├── examples
                ├── LICENSE
                ├── node_modules
                ├── package-lock.json
                ├── package.json
                ├── pages
                ├── playwright-report
                ├── playwright.config.js
                ├── README.md
                ├── test-results
                └── tests

              

## 🏗️ Arquitetura do projeto:


 </div>