const router = require('express').Router()

const { allFavs, favXuser } = require("../controllers/favourites")

module.exports = (db) => {
    router.get("/all", allFavs(db))
    router.get("/:id",favXuser(db))

    return router
}