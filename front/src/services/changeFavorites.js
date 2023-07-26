const PATH = "/favourites";

export const addFavourites = (client) => async (params) => {
  try {
    const { data } = await client.post(`${PATH}/add`, params);
    return data;
  } catch (error) {
    console.error("> error [addFavourites]", error.message);
    return {
      success: false,
    };
  }
};

export const deleteFavourites = (client) => async (params)=>{
    try {
        const {data} = await client.post(`${PATH}/delete`,{params});
        return data;
    } catch (error) {
        console.error(">error [deleteFavourites]", error.message);
        return{
            success: false,
        }
    }
}
