var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp:  faker.phone.phoneNumberFormat(),
            address: {
                postalcode: '60730120',
                street: 'Rua Dom Henrique',
                number: '395',
                details: 'Próximo ao Aconchemax',
                district: 'Vila Peri',
                city_state: 'Fortaleza/CE'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }

}