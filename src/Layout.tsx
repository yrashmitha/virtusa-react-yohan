import React from "react";
import { Route, Switch } from "react-router";
import Assignment2 from "./Assignment2";
import Header from "./components/Header";
import Counter from "./Contacts";
import Home from "./Home";

interface Props {}

export interface User {
  firstName: string;
  lastName: string;
  age: number;
}

export const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/as-2" exact>
          <Assignment2 />
        </Route>
        <Route path="/redux" exact>
          <Counter />
        </Route>
      </Switch>
    </div>
  );
};
