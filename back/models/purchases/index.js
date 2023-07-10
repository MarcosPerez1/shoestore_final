const { getAllPurchases, newPurchase, getPurchaseUser } = require("./queries")

const getAllInfoPurchases = (db) = async () => {
    try {
        const response = await db.query(getAllPurchases())
        return {
            ok: true,
            response: response.rows

        }
    } catch (error) {
        console.info(">impossible to connect to server:", error.message)
        return {
            ok: false,
            message: message.error
        }
    }
}

const addNewPurchase = (db) = async (shoeId, userId) => {
    try {
        const response = await db.query(newPurchase(shoeId, userId))
        return {
            ok: true,
            response: response.rows

        }
    } catch (error) {
        console.info(">impossible to connect to server:", error.message)
        return {
            ok: false,
            message: message.error
        }
    }
}

const getPurchasesUser = (db) = async (shoeId, userId) => {
    try {
        const response = await db.query(getPurchaseUser(shoeId, userId))
        return {
            ok: true,
            response: response.rows

        }
    } catch (error) {
        console.info(">impossible to connect to server:", error.message)
        return {
            ok: false,
            message: message.error
        }
    }
}

module.exports = {
    getAllInfoPurchases,
    addNewPurchase,
    getPurchasesUser
}