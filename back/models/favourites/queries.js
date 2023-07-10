const { sql } = require("slonik")

const getAllFavs = () => sql.unsafe`
SELECT * 
FROM favourites
`
const getFavsUser = (user) => sql.unsafe`
SELECT p.id, p.brand, p.model, p.size, p.images, p.price
FROM favourites AS f
JOIN products AS p ON f.product_id = p.id
WHERE f.user_id = ${user};

`
const newFavourite = ({ user_id, shoe_id }) => sql.unsafe`
INSERT INTO favourites (user_id, shoe_id)
VALUES (${user_id}, ${shoe_id});
`
const deleteFav = ({ user_id, shoe_id }) => sql.unsafe`
DELETE FROM favourites
WHERE user_id = ${user_id} AND shoe_id = ${shoe_id};
`



module.exports = {
    getAllFavs,
    getFavsUser,
    newFavourite,
    deleteFav
}