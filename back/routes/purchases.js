const router = require('express').Router()

const {allPurchases,addPurchase,getUserPurchases}=require("../controllers/purchases")

module.exports=(db)=>{
    router.get("/all",allPurchases(db)),
    router.get("/:id", getUserPurchases(db)),
    router.post("/add", addPurchase(db))


    return router
}