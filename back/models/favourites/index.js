const { getFavsUser, newFavourite, deleteFav, allFavourites } = require("./queries")

const getFavs = (db) => async () => {

    try {
        console.log(db)
        const response = await db.query(allFavourites())
        
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

const FavUser = (db) => async (email) => {
    try {
        const response = await db.query(getFavsUser(email))
        console.log(response, 'respondeeee')
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

const addFavourite = (db) => async (shoeId, userId) => {
    try {
        const response = await db.query(newFavourite(shoeId, userId))
        return {
            ok: true,
            response: response.rows
        }
    } catch (error) {

        return {
            ok: false,
            message: error.message
        }

    }
}

const eraseFav = (db) => async (shoeId, userId) => {
    try {
        const response = await db.query(deleteFav(shoeId, userId))
        return {
            ok: true,
            response: response.rows
        }
    } catch (error) {

        return {
            ok: false,
            message: error.message
        }

    }
}
module.exports = {
    FavUser,
    addFavourite,
    eraseFav,
    getFavs
}