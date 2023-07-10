const { sql } = require("slonik")

const getAllPurchases = () => sql.unsafe`
SELECT *
FROM purchases

`

const newPurchase = (shoeId, userId) => sql.unsafe`
INSERT INTO products_clients (shoe_id, user_id)
VALUES (${shoeId}, ${userId});

`
const getPurchaseUser = (user) => sql.unsafe`
  SELECT p.id, p.brand, p.model, p.size, p.images, p.price
  FROM purchases AS pu
  JOIN products AS p ON pu.product_id = p.id
  WHERE pu.user_id = ${user};
`;


module.exports = {
    getAllPurchases,
    newPurchase,
    getPurchaseUser
}