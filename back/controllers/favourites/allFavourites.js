const queries = require("../../models/favourites")
const errors = require("../../misc/errors")

module.exports = (db) => async (req, res, next) => {
    const dbResponse = await queries.getFavs(await db)()

    if (!dbResponse.ok) return next(errors[500])
    res.status(200).json({
        success: true,
        data: dbResponse.response
    })
}