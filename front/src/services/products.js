const PATH = "/shoes"

export const products = (client) => async () => {
    try {
        const { data } = await client.get(`${PATH}/info`)
        return data;

    } catch (error) {
        console.info("> error [info]", error.message);
        return {
            success: false,
        }
    }
}