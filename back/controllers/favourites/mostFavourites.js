const queries = require("../../models/favourites")
const errors = require("../../misc/errors")

module.exports = (db) => async (req, res, next) => {

    const respuestaBd = await queries.mostFavs(await db)()
    
    if (!respuestaBd.ok) return next(errors[500])
    res.status(200).json({
        success: true,
        data: respuestaBd.response

    })
}