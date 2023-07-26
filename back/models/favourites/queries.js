const { sql } = require("slonik")

const allFavourites = () => sql.unsafe`
SELECT *
FROM favourites
`

const getFavsUser = (email) => sql.unsafe`
SELECT p.brand, p.model, p.size, p.images, p.price
from favourites f
inner join products p on p.id = f.product_id
where f.user_id = ( select u.id from users u where email like ${email})
`

const newFavourite = (user_id, product_id) => sql.unsafe`
INSERT INTO favourites (user_id, product_id)
VALUES (${user_id}, ${product_id});
`

const deleteFav = ( user_id, shoe_id ) => sql.unsafe`
DELETE FROM favourites
WHERE user_id = ${user_id} AND shoe_id = ${shoe_id};
`
const getMostFavs = () => sql.unsafe`
SELECT f.product_id, COUNT(*) AS count, p.images
FROM favourites AS f
JOIN products AS p ON f.product_id = p.id
GROUP BY f.product_id, p.images
ORDER BY count DESC
LIMIT 5;

`

module.exports = {
    getFavsUser,
    newFavourite,
    deleteFav,
    allFavourites,
    getMostFavs
}

// SELECT p.id, p.brand, p.model, p.size, p.images, p.price
// FROM favourites AS f
// JOIN products AS p ON f.product_id = p.id
// WHERE f.user_id = ${email};
