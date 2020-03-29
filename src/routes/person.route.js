const KoaRouter = require('koa-router')
const PersonController = require('../controllers/person.controller')
const router = new KoaRouter({ prefix: '/person' })
const controller = new PersonController()

router.get('person/company', '/:company', controller.getByCompany)

module.exports = router
