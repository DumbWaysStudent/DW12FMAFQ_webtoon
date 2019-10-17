const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000
app.use(bodyParser.json())

//controllers
const AuthController = require('./controllers/auth')
const UserController = require('./controllers/users')
const WebtoonController = require('./controllers/webtoons')
const EpisodeController = require('./controllers/episodes');
const ImageController = require('./controllers/images');

//middlewares
const {
    authenticated
} = require('./middleware')

app.group("/api/v1", (router) => {

    // Login
    router.post('/login', AuthController.login)
    router.post('/register', AuthController.register)

    // Users
    router.get('/user', UserController.index)
    router.get('/user/:id', UserController.show)
    router.delete('/user/:id', UserController.delete)
    router.patch('/user/:id', UserController.update)
    router.put('/user/', UserController.store)

    // Webtoons
    router.get('/webtoon', WebtoonController.index)
    router.get('/favourite/:id', authenticated, WebtoonController.showFavourites)
    router.get('/user/:id/webtoons', authenticated, WebtoonController.showAlltoon)
    router.get('/webtoons/:title', WebtoonController.searchTitle)
    router.post('/user/:id/webtoon/:idwt', WebtoonController.store)
    router.put('/user/:id/webtoon/:idwt', authenticated, WebtoonController.update)
    router.delete('/user/:id/webtoon/:idwt', authenticated, WebtoonController.delete)

    // Episode
    router.get('/webtoon/:id/episode/:id', authenticated, EpisodeController.showWebtoonEpisodes);
    router.get('/user/:id/webtoon/:webtoon_id/episode/:episode_id/images', authenticated, EpisodeController.allImagesEpisodes);
    router.post('/user/:id/webtoon/:idwt/episode', authenticated, EpisodeController.store);
    router.put('/user/:id/webtoon/:webtoon_id/episode/:episode_id', authenticated, EpisodeController.update);

    // Images
    router.get('/image/:episode_id', ImageController.index)

})


app.listen(port, () => console.log(`Listening on port ${port}!`))