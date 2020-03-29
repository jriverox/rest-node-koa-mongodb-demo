const PersonRepository = require('../repositories/person.repository')

const repository = new PersonRepository()

module.exports = class PersonService {
  async getByCompany (company) {
    return await repository.getByConpany(company)
  }
}
