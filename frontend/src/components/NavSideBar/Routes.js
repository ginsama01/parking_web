import React from "react";
import { BrowserRouter, Switch, Route, Redirect, withRouter } from "react-router-dom";

import ChangeInfo from "./ChangeInfo";
import HistoryPark from "./HistoryPark";
import LovePark from "./LovePark";
import OrderPark from "./OrderPark";


function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/changeInfo">
          <ChangeInfo />
        </Route>
        <Route path="/lovePark">
          <LovePark />
        </Route>
        <Route path="/historyPark">
          <HistoryPark />
        </Route>
        <Route path="/orderPark">
          <OrderPark/>
        </Route>
        <Route path="/logOut">
        </Route>
        <Route path="/">
          <LovePark />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default withRouter(Routes);
