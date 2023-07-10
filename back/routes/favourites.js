const router = require('express').Router()

const { allFavs, favXuser, deleteFav, newFav } = require("../controllers/favourites")

module.exports = (db) => {
    router.get("/all", allFavs(db)),
        router.get("/:id", favXuser(db)),
        router.post("/add", newFav(db)),
        router.post("/delete", deleteFav(db))

    return router
}