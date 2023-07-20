const queries = require("../../models/favourites")
const errors = require("../../misc/errors")

module.exports = (db) => async (req, res, next) => {
    const { email } = res.locals.user
   console.log(email, 'hdñlasdfklj')
    const dbResponse = await queries.FavUser(await db)(email)
    console.log(dbResponse, 'jhhhhhhhhh')
    if (!dbResponse.ok) return next(errors[500])
    res.status(200).json({
        success: true,
        data: dbResponse.response

    })
}