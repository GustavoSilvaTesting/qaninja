import signup from '../pages/SignupPage';
import SignupFactory from '../factories/SignupFactory';
import signupFactory from '../factories/SignupFactory';
import SignupPage from '../pages/SignupPage';

describe('Signup', ()=> {

    // beforeEach( function() {
    //     cy.fixture('deliver').then((d)=> {
    //         this.deliver = d
    //     })
    // })

    it('User should be deliver', function() {     
        
        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShoulBe(expectedMessage)
    })

    it('invalid document', function() {   
        
        var deliver = signupFactory.deliver()

        deliver.cpf = '000100010cfd'
        
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShoulBe('Oops! CPF inválido')        
    }) 
    
    it('invalid email', function() {   
        
        var deliver = signupFactory.deliver()

        deliver.email = 'teste.com.br'
        
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShoulBe('Oops! Email com formato inválido.')        
    })

    it.only('Required fields', function() {
        signup.go()
        signup.submit()
        signup.alertMessageShoulBe('É necessário informar o nome')        
        signup.alertMessageShoulBe('É necessário informar o CPF')        
        signup.alertMessageShoulBe('É necessário informar o email')        
        signup.alertMessageShoulBe('É necessário informar o CEP')        
        signup.alertMessageShoulBe('É necessário informar o número do endereço')        
        signup.alertMessageShoulBe('Selecione o método de entrega')        
        signup.alertMessageShoulBe('Adicione uma foto da sua CNH')        
    })
})