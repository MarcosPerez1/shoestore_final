const PATH = "/favourites";

export const favourites = (client) => async () => {
    try {
        const { data } = await client.get(`${PATH}`);
        return data;
    } catch (error) {
        console.error("> error [getFavorites]", error.message);
        return {
            success: false,
        };
    }
};
