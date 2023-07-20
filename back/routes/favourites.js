const router = require('express').Router()

const { authorizer } = require('../middlewares')

const { allFavs, favXuser, deleteFav, newFav } = require("../controllers/favourites/")

module.exports = (db) => {
    router.get("/", authorizer(), favXuser(db)),
    router.get("/info", allFavs(db)),
    router.post("/add", newFav(db)),
    router.post("/delete", deleteFav(db))

    return router
}