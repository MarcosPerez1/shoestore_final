const queries = require("../../models/shoes")

module.exports = (db) => async (req, res, next) => {
    const dbResponse = await queries.getAllInfo(await db)()

    if (!dbResponse.ok) return next({
        statusCode: 500,
        error: new Error("Something went wrong")
    })
    res.status(200).json({
        success: true,
        data: dbResponse.response
    })
}