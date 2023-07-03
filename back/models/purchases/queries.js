const {sql}= require("slonik")

const getAllPurchases = ()=> sql.unsafe`
SELECT *
FROM purchases

`

module.exports={
    getAllPurchases
}