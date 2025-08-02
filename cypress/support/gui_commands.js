//Criar comandos customizados
Cypress.Commands.add(
  "login",

  (
    //Função de callback recebe como argumento o user e o password
    user = Cypress.env("user_name"), //caso voce n passe esses valores eu passei valores padrão que vao ser buscados no cypress.env.json
    password = Cypress.env("user_password")
  ) => {
    //Corpo da função que faz o passo a passo do teste
    const login = () => {
      // visita url "/users/sign_in"(não colocamos tudo completo pq ja temos isso em /cypress.config)
      cy.visit("/users/sign_in");
      // um get(chamando) pra um elemento que possui a propriedade data-qa-selector com o comando 'login_field'
      cy.get("[data-qa-selector='login_field']").type(user);
      cy.get("[data-qa-selector='password_field']").type(password, {
        log: false, // propriedade para não salvar a senha no log de comando do cypress por ser um dado sensível
      });
      // um get(chamando) pra um elemento que possui a propriedade data-qa-selector com o comando 'sign_in_button' com o .click
      cy.get("[data-qa-selector='sign_in_button']").click();
    };
//chamando a função que vai executar o teste
    login();
  }
);
