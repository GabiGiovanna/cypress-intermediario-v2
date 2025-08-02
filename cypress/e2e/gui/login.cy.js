//Função que recebe 2 argumentos
// Função 1: nome da funcioinalidade(nesse caso login) - Função 2: callback 
describe("Login", () => {
  //definição de teste case
  // Argumento 01 : nome da função - Argumento 02 : callback(os passos que vão ser execurtados se ocorrer com sucesso)
  it("successfully", () => {
    cy.login();

    cy.get(".qa-user-avatar").should("be.visible"); // verifica se esse elemnto com essa classe deve estar visivel 
  });
});
