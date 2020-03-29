const PersonService = require('../services/person.service')

const service = new PersonService()

module.exports = class PersonController {
  async getByCompany (ctx) {
    const company = ctx.params.company
    const data = await service.getByCompany(company)
    if (data) { ctx.body = data } else { ctx.throw(400, `There are no people from company ${company}`) }
  }
}
