const router = require("express").Router()

const authRoutes = require("./auth")
const shoeRoutes = require("./shoes")
const favouriteRoutes = require("./favourites")
const purchasesRoutes = require("./purchases")
const userRoutes = require("./users")

module.exports = (db) => {
    router.use("/auth", authRoutes(db))
    router.use("/shoes", shoeRoutes(db))
    router.use("/favourites", favouriteRoutes(db))
    router.use("/purchases", purchasesRoutes(db))
    router.use("/users", userRoutes(db))


    return router
}