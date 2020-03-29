const Person = require('../models/person.model')

module.exports = class PersonRepository {
  async getByConpany (company) {
    return await Person.find({ company: company })
  }
}
