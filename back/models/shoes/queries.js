const { sql } = require("slonik")


const getAllShoes = () => sql.unsafe`
SELECT id, brand, model, size, images, price, quantity
FROM products

`
const getShoeName = (model) => sql.unsafe`
SELECT model,brand,size,images,price
FROM  products
WHERE model =${model}
LIMIT 1`



module.exports = {
    getAllShoes,
    getShoeName
}