const { getAllShoes, getShoeName } = require("./queries")

const getAllInfo = (db) => async () => {
    try {
        const response = await db.query(getAllShoes())
        return {
            ok: true,
            response: response.rows
        }
    } catch (error) {
        console.info("> impossible to connect to server:", error.message)
        return {
            ok: false,
            message: error.message
        }
    }
}

const getShoeInfo = (db) => async (model) => {
    try {
        const response = await db.query(getShoeName(model))
        return {
            ok: true,
            response: response.rows
        }
    } catch (error) {
        console.info(">impossible to connect to server:", error.message)
        return {
            ok: false,
            message: error.message
        }
    }
}

module.exports = {
    getAllInfo,
    getShoeInfo
}