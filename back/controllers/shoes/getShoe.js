const queries = require("../../models/shoes")
const errors = require("../../misc/errors")

module.exports = (db) => async (req, res, next) => {
    const { model } = req.query

    const dbResponse = await queries.getShoeInfo(await db)(model)
    if (!dbResponse.ok) return next(errors[500])
    res.status(200).json({
        success: true,
        data: dbResponse.response
    })

}