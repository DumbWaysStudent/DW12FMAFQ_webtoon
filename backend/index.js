const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000
app.use(bodyParser.json())

//controllers
const UserController = require('./controllers/users')
const AuthController = require('./controllers/auth')
// const WebtoonController = require('./controllers/webtoons')

//middlewares
// const { authenticated } = require('./middleware')

app.group("/api/v1", (router) => {

    //todos API
    // webtoons
    router.get('/user', UserController.index)
    router.get('/user/:id', UserController.show)
    router.delete('/user/:id', UserController.delete)
    router.patch('/user/:id', UserController.update)
    router.put('/user/', UserController.store)
    router.post('/login', AuthController.login)
    router.post('/register', AuthController.register)

    // users
    // router.get('/webtoon/:id', WebtoonController.show)
    // router.post('/webtoon', WebtoonController.store)
    // router.patch('/webtoon/:id', WebtoonController.update)
    // router.delete('/webtoon/:id', WebtoonController.delete)

    //another APIs goes here
})


app.listen(port, () => console.log(`Listening on port ${port}!`))