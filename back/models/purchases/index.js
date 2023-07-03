const { getAllPurchases } = require("./queries")

const getAllInfoPurchases = (db) = async () => {
    try {
        const response = await db.query(getAllPurchases())
        return{
            ok:true,
            response:response.rows

        }
    } catch (error) {
        console.info(">impossible to connect to server:", error.message)
        return{
            ok:false,
            message:message.error
        }
    }
}


module.exports={
    getAllInfoPurchases
}