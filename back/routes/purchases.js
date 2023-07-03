const router = require('express').Router()

const {allPurchases}=require("../controllers/purchases")

module.exports=(db)=>{
    router.get("/all",allPurchases(db))

    return router
}