class SignupPage {

    go() {
        cy.viewport(1440, 900) //define tamanho da janela
            cy.visit('https://buger-eats-qa.vercel.app') //acessa a página principal alvo do teste

            cy.get('a[href="/deliver"]').click() //encontrar o botão e clicar
            cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas') //checkpoint para garantir que estamos no lugar certo
    }

    fillForm(entregador){
            cy.get('input[name="fullName"]').type(entregador.nome)
            cy.get('input[name="cpf"]').type(entregador.cpf)
            cy.get('input[name="email"]').type(entregador.email)
            cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

            cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
            cy.get('input[value="Buscar CEP"]').click()

            cy.get('input[name="address-number"]').type(entregador.endereco.numero)
            cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

            cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
            cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
            cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

            cy.contains('.delivery-method li', entregador.metodo_entrega).click()

            cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh)
    }

    submit(){
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectedMessage){
        cy.get('div[class="swal2-html-container"]').should('have.text',expectedMessage)
    }


    alertMesssageShouldBe(expectedMessage){
        //cy.get('.alert-error').should('have.text', expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }
}

export default new SignupPage;