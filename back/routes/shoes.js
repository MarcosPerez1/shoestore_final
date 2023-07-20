const router = require('express').Router()

const { allInfo, getShoe } = require("../controllers/shoes/")

module.exports = (db) => {
    router.get("/", getShoe(db)),
        router.get("/info", allInfo(db))

    return router
}