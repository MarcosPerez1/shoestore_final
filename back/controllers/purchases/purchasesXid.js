const queries = require("../../models/purchases")
const errors = require("../../misc/errors")

module.exports = (db) => async (req, res, next) => {
    const { user } = res.locals

    const dbResponse = await queries.getPurchasesUser(await db)(user)
    if (!dbResponse.ok) return next(errors[500])
    res.status(200).json({
        success: true,
        data: dbResponse.response

    })
}