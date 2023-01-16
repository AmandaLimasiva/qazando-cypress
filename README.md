# Projeto QAzando Shop 🚀
Esse projeto tem como finalidade mostrar o uso de Automação de Testes Web com Cypress no site QAzando Shop desenvolvido baseado no curso de <i>Automação de testes web com cypress</i> da <b>Qazando</b>. Os testes foram adicionados a Comandos Customizados para melhorar a compreensão dos testes em cada Spec.

## Pré-requisitos
git  
Node.js  
npm (Instalação ocorre junto com o Node)  
Google Chorme  
VS Code
Cypress
Faker
cypress-real-events


### 🟡Os comandos do Cypress que utilizei para executar os testes
* cy.visit() - Vista a URL do site que vamos aplicar os testes automáticos.
* cy.title() + .should - Verifica o título da página.
* cy.get()- Obtém um ou mais elementos DOM por seletor ou alias para manipular os campos.
* cy.contains - obtém apenas um elemento do DOM.

### 🟡  Os casos de testes que executei foram:
 <b>Login</b>
1. Validar o titulo da página Web
2.  Realizar Login com dados válidos 
3. Realizar Login com senha incorreta
4. Realizar Login com e-mail incorreto
5. Realizar Logout

<b> Cadastro</b>
1. Realizar novo cadastro com dados válidos
2. Realizar novo cadastro com e-mail inválido
3. Realizar cadastro de um e-mail já existente
4. Atualizar dados cadastrais

<b> Produtos</b>
1. Adicionar novos produtos ao carrinho
2. Remover produtos do carrinho  
3. Duplicar produtos no carrinho
4. Alterar quantidade de Itens
5. Favoritar um produto

 
  ### 🟡  Links importantes

[https://docs.cypress.io/](https://docs.cypress.io/) <p>
http://automationpratice.com.br/
