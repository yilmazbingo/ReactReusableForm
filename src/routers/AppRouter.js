import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../components/Login";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import NotFound from "../components/NotFound";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} exact={true} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
        <Route to="not-found" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
