# rest-api-koa-mongodb-demo
## Basic rest api Demo using koa.js and mongoose

## Steps
1. create project folder
2. initialize node project
```shell
npm init -y
```
3. Install dependencies
```shell
npm i koa koa-router koa-bodyparser koa-logger koa-json mongoose yenv
```
4. Install DEV dependencies
```shell
npm i -D nodemon eslint
```
5. Initialize linter
```shell
npx eslint --init
```
6. Open project folder with your editor
7. Create src folder
8. Edit package.json and add scripts
```json
"dev": "nodemon ./src/server.js",
"start": "node ./src/server.js",
"lint": "eslint src",
```
9. Create env.yaml in root folder with de following text
```yaml
development:
    PORT: 3000,
    MONGODB_URL: "mongodb+srv://your-user-here:your-password-here@your-cluster-url/your-database-here?retryWrites=true&w=majority"
production:
    PORT: 3000,
    MONGODB_URL: "mongodb+srv://your-user-here:your-password-here@your-cluster-url/your-database-here?retryWrites=true&w=majority"
```
Note: replace the url template with your values (your-user-here, your-password-here, your-cluster-url, your-database-here)
add env.yaml to .gitignore (for security reasons)

10. Model
  * Create folder models
  * Create [person.model.js](https://github.com/jriverox/rest-api-koa-mongodb-demo/blob/master/src/models/person.model.js) inside models folder

11. Repository
  * Create repositories folder
  * Create [person.repository.js](https://github.com/jriverox/rest-api-koa-mongodb-demo/blob/master/src/repositories/person.repository.js) file inside repositories folder

12. Service
  * create services folder
  * Create [person.service.js](https://github.com/jriverox/rest-api-koa-mongodb-demo/blob/master/src/services/person.service.js) inside services folder

13. Controller
  * Create controllers folder
  * Create [person.controller.js](https://github.com/jriverox/rest-api-koa-mongodb-demo/blob/master/src/controllers/person.controller.js) inside controllers folder

14. Router
  * Create routes folder
  * Create [person.route.js](https://github.com/jriverox/rest-api-koa-mongodb-demo/blob/master/src/routes/person.route.js) inside routes folder
15. Create [routes.js](https://github.com/jriverox/rest-api-koa-mongodb-demo/blob/master/src/routes.js) inside src folder
16. Create [server.js](https://github.com/jriverox/rest-api-koa-mongodb-demo/blob/master/src/server.js) inside src folder
