import { useQuery } from "react-query";
import { favInfo } from "../services";

export const useFavUser = () => {
  const { data, isLoading } = useQuery('fav', favInfo.favourites);

  return { data, isLoading };
};
