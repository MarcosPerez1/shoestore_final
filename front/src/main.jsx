import React from "react";
import ReactDOM from "react-dom/client";
import { Switch, Redirect } from "wouter";
import "./main.css";
import Styled from "./styles";

import Route from "./components/Route";
import Provider from "./context/Provider";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import userPage from "./pages/UserPage"
import NavBar from "./components/Navbar";

const Main = () => {
  return (
    <Provider>
      <Styled.Wrapper>
        <NavBar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/products" component={Products} />
          <Route path="/" guarded={true}  component={userPage} />
          <Redirect to="/login" />

        </Switch>
      </Styled.Wrapper>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
