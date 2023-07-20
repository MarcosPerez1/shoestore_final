const queries = require("../../models/shoes")
const errors = require("../../misc/errors")

module.exports = (db) => async (req, res, next) => {
    const dbResponse = await queries.getAllInfo(await db)()

    let response = dbResponse.response.map(item => {
        return {
            ...item,
            size: dbResponse.response.filter(j => j.model === item.model).map(i => i.size)
        }
    })

    response = [...new Map(response.map(item => [item['model'], item])).values()]

    if (!dbResponse.ok) return next(errors[500])
    res.status(200).json({
        success: true,
        data: response
    })
}