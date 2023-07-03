const {sql}=require ("slonik")

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


module.exports= {
    getAllFavs,
    getFavsUser
}