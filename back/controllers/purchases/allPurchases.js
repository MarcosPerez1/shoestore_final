const queries = require("../../models/purchases")
const errors=require("../../misc/errors")

module.exports = (db) => async (req, res, next) => {
    const dbResponse = await queries.getAllInfoPurchases(await db)()

    if (!dbResponse.ok) return next(errors[500])
    res.status(200).json({
        success: true,
        data: dbResponse.response
    })
}