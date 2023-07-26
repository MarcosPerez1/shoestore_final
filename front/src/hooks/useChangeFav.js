
import { useMutation } from "react-query";
import { changeFav } from "../services";

export const useChangeFavs = () => {
  const { mutate: fav, error } = useMutation(changeFav.addFavourites);

  return { fav, error };
};
