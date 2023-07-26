const PATH = "/favourites"

export const mostFavourites = (client) => async () => {
    try {
        const { data } = await client.get(`${PATH}/most`)
        return data;
        console.log(data)
    } catch (error) {
        console.info("> error [info]", error.message);
        return {
            success: false,
        }
    }
}