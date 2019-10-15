const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000
app.use(bodyParser.json())

//controllers
const UserController = require('./controllers/users')
const WebtoonController = require('./controllers/webtoons')
const AuthController = require('./controllers/auth')

//middlewares
// const { authenticated } = require('./middleware')

app.group("/api/v1", (router) => {

    //todos API
    // webtoons
    router.get('/webtoons', WebtoonController.index)
    router.get('/webtoons/:id', WebtoonController.show)
    router.delete('/webtoons/:id', WebtoonController.delete)
    router.patch('/webtoons/:id', WebtoonController.update)
    router.put('/webtoons/', WebtoonController.store)
    router.post('/auth', AuthController.login)
    // users
    // router.get('/webtoon/:id', WebtoonController.show)
    // router.post('/webtoon', WebtoonController.store)
    // router.patch('/webtoon/:id', WebtoonController.update)
    // router.delete('/webtoon/:id', WebtoonController.delete)

    //another APIs goes here
})


app.listen(port, () => console.log(`Listening on port ${port}!`))