import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage'

describe('SignUp', () => {

    // beforeEach(function(){
    //     cy.fixture('entregador').then((e)=> {
    //         this.entregador = e
    //     })
    // })

    it('User should become a Deliveryman', function () {

        var entregador = signupFactory.entregador()

        signup.go()
        signup.fillForm(entregador)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.modalContentShouldBe(expectedMessage)

        cy.get('.swal2-confirm').click()

    })

    it('Incorrect Document', function () {

        var entregador = signupFactory.entregador()
        entregador.cpf = "336165928AA"

        signup.go()
        signup.fillForm(entregador)
        signup.submit()

        signup.alertMesssageShouldBe('Oops! CPF inválido')

    })

    it('Incorrect Email', function () {

        var entregador = signupFactory.entregador()
        entregador.email = "zichia.com.br"

        signup.go()
        signup.fillForm(entregador)
        signup.submit()

        signup.alertMesssageShouldBe('Oops! Email com formato inválido.')

    })

    context('Required Fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'name', output: 'É necessário informar o CPF' },
            { field: 'name', output: 'É necessário informar o email' },
            { field: 'name', output: 'É necessário informar o CEP' },
            { field: 'name', output: 'É necessário informar o número do endereço' },
            { field: 'name', output: 'Selecione o método de entrega' },
            { field: 'name', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function () {
            signup.go()
            signup.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                SignupPage.alertMesssageShouldBe(msg.output)
            })
        })

    })


})