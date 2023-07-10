import axios from "axios";

import {register, login, logout} from "./auth";
import {basic} from "./user"


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

  export {
    auth,
    user
  }