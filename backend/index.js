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
    router.post('/login', AuthController.login) // 1, 13
    router.post('/register', AuthController.register) // 2, 14

    // Users
    router.get('/user', UserController.index)
    router.get('/user/:id', UserController.show)
    router.delete('/user/:id', UserController.delete)
    router.patch('/user/:id', UserController.update)
    router.post('/user/', UserController.store)
    // router.put('/user/', UserController.store)

    // Webtoons
    router.get('/webtoon', WebtoonController.index) // 3, 15
    router.get('/favourite', authenticated, WebtoonController.showFavourites) // 3, 15
    router.get('/user/:id/webtoons', authenticated, WebtoonController.showAlltoon) // 7, 20
    router.get('/webtoons/:title', WebtoonController.searchTitle) // 6, 19
    router.post('/user/:id/webtoon/:idwt', WebtoonController.store) // 8, 21
    router.put('/user/:id/webtoon/:idwt', authenticated, WebtoonController.update) // 9, 22
    router.delete('/user/:id/webtoon/:idwt', authenticated, WebtoonController.delete) // 10, 23

    // Episode
    router.get('/webtoon/:id/episodes', authenticated, EpisodeController.showEpisodes) // 3, 16
    router.get('/webtoon/:id/episode/:idep', authenticated, EpisodeController.showWebtoonEpisodes); // 4,17 IMAGES
    router.get('/user/:id/webtoon/:webtoon_id/episode/:episode_id/images', authenticated, EpisodeController.allImagesEpisodes);
    router.post('/user/:id/webtoon/:idwt/episode', authenticated, EpisodeController.store); // 11, 24
    router.put('/user/:id/webtoon/:webtoon_id/episode/:episode_id', authenticated, EpisodeController.update); // 12, 25
    router.delete('/user/:id/webtoon/:webtoon_id/episode/:episode_id', authenticated, EpisodeController.delete); // 13, 26

    // Images
    router.get('/image/:episode_id', ImageController.index)
    router.post('/user/:id/webtoon/:webtoon_id/episode/:episode_id/image', ImageController.store) // 14, 27
    router.delete('/user/:id/webtoon/:webtoon_id/episode/:episode_id/image/:image_id', authenticated, ImageController.delete); // 15, 28
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
