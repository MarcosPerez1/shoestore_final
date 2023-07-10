const queries = require("../../models/purchases")

module.exports = (db) => async (req, res, next) => {
    const { user_id, shoe_id } = req.body

    const dbRes = await queries.addNewPurchase(await db)(req.body)

    if (!dbRes.ok) return next({
        statusCode: 500,
        error: new Error("something went wrong!")
    })

    res.status(200).json({
        success: true,
        data: dbRes.response
    })
}