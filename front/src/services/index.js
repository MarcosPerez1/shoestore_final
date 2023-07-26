import axios from "axios";

import { register, login, logout } from "./auth";
import { basic } from "./user"
import { products } from "./products";
import { favourites } from "./favouritesClient"
import { addFavourites, deleteFavourites } from "./changeFavorites";
import { mostFavourites } from "./mostFavs"


const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const auth = {
  register: register(client),
  login: login(client),
  logout: logout(client),
};

const user = {
  basic: basic(client)

};

const info = {
  products: products(client)
}

const favInfo = {
  favourites: favourites(client)
}

const changeFav = {
  addFavourites: addFavourites(client),
  deleteFavourites: deleteFavourites(client)
}

const mostFavs = {
  mostFavourites: mostFavourites(client)
}

export {
  auth,
  user,
  info,
  favInfo,
  changeFav,
  mostFavs
}