const router = require('express').Router()

const { authorizer } = require('../middlewares')

const { allFavs, favXuser, deleteFav, newFav, mostFavourites } = require("../controllers/favourites/")

module.exports = (db) => {
    router.get("/info", allFavs(db)),
    router.get("/most", mostFavourites(db)),
    router.get("/", authorizer(), favXuser(db)),
    router.post("/add", newFav(db)),
    router.post("/delete", deleteFav(db))
    

    return router
}