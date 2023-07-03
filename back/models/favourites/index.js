const { getAllFavs, getFavsUser } = require("./queries")

const getFavs = (db) = async () => {
    try {
        const response = await db.query(getAllFavs())
        return {
            ok: true,
            response: response.rows
        }
    } catch (error) {
        console.info(">impossible connect to server:", error.message)
        return {
            ok: false,
            error: error.message
        }
    }
}

const FavUser = (db) = async (name) => {
    try {
        const response = await db.query(getFavsUser(name))
        return {
            ok: true,
            response: response.rows
        }
    } catch (error) {
        console.info(">impossible to connect to server:", error.message)
        return {
            ok: false,
            error: error.message
        }
    }
}
module.exports = {
    getFavs,
    FavUser
}