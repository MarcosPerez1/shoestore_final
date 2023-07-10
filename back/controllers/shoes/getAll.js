const queries = require("../../models/shoes")
const errors = require("../../misc/errors")

module.exports = (db) => async (req, res, next) => {
    const dbResponse = await queries.getAllInfo(await db)()

    if (!dbResponse.ok) return next(errros[500])
    res.status(200).json({
        success: true,
        data: dbResponse.response
    })
}