const router = require('express').Router()

const authRoutes = require('./auth')
const shoeRoutes = require("./shoes")


module.exports = (db) => {
    router.use('/auth', authRoutes(db)),
    router.use("/shoes",shoeRoutes(db))
  

    return router
}