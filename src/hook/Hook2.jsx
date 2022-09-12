import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Hook11 from "./news/Hook11";
import Hook22 from "./news/Hook22";
const Hook2 = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/hook1">123</Link>
        </li>
        <li>
          <Link to="/hook2">qwe</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/hook1" component={Hook11}></Route>
        <Route path="/hook2" component={Hook22}></Route>
      </Switch>
    </div>
  );
};

export default Hook2;
