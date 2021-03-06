/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: @J5kinner
 *
 */

import React, { useEffect, useState } from "react";
import {
  Switch,
  Route,
  // useHistory,
} from "react-router-dom";
import Box from "@mui/material/Box";
import "../assets/scss/layout/App.scss";
import { isAuthenticated } from "../services/Authentication";
import DashboardPage from "./Dashboard/DashboardPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import Header from "../components/header/Header";
import PrivateRoute from "./PrivateRoute";

export default function Navigation() {

  const [user, setUser] = useState(false);
  // const history = useHistory();

  useEffect(() => {
    if (isAuthenticated()) {
        if (!user) setUser(isAuthenticated());
    } else {
      setUser(false);
    }
  }, [user]);

  // const logoutHandler = () => history.push("/login");

  return (
    <div className="App">
      <Header />

      <Box sx={{ mt: 10, ml: 5, mr: 5 }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <PrivateRoute
            path="/dashboard"
            component={DashboardPage}
            user={user}
            setUser={setUser}
            exact
          />
        </Switch>
      </Box>
    </div>
  );
}
