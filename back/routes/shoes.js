const router = require('express').Router()

const {allInfo,getShoe}= require("../controllers/shoes/")

module.exports= (db) =>{
    router.get("/info", allInfo(db)),
    router.get("/", getShoe(db))

    return router
}