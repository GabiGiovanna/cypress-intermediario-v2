//Função que recebe 2 argumentos
// Função 1: nome da funcioinalidade(nesse caso Logout) - Função 2: callback
describe("Logout", () => {
//pre condição do teste que vai ser o login tlgd
    beforeEach(() => { //executa a antes de cada bloco it
        cy.login();
        cy.visit('/')
    })

  //definição de teste case
  // Argumento 01 : nome da função - Argumento 02 : callback(os passos que vão ser execurtados se ocorrer com sucesso)
  it("successfully", () => {
    cy.logout();

    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/users/sign_in`); // para ver se o logout ocorreu com sucesso, vamos validar se a url é igual a nossa base da url'/users/sign_in'
  });
});

