const { getFavsUser, newFavourite, deleteFav, allFavourites, getMostFavs } = require("./queries")

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

const addFavourite = (db) => async (user_id, product_id) => {
    try {
        const response = await db.query(newFavourite(user_id, product_id))
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

const mostFavs = (db) => async () => {

    try {
        console.log(db)
        const response = await db.query(getMostFavs())

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

module.exports = {
    FavUser,
    addFavourite,
    eraseFav,
    getFavs,
    mostFavs
}