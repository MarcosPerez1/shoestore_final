const queries = require("../../models/favourites/index")
const userQueries = require("../../models/auth/index")

module.exports = (db) => async (req, res, next) => {
    const { email, productId} = req.body

    const {userId} = await userQueries.selectById(await db)(email)
    
    const dbRes = await queries.addFavourite(await db)(userId, productId)

    if (!dbRes.ok) return next({
        statusCode: 500,
        error: new Error("something went wrong!")
    })

    res.status(200).json({
        success: true,
        data: dbRes.response
    })
}