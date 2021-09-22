import { CssBaseline } from "@mui/material";
import React from "react";
import {
  Redirect, Route, Switch, useRouteMatch,
} from "react-router-dom";

const Login = React.lazy(() => import("./Login"));
const Signup = React.lazy(() => import("./Signup"));

const AuthRoutes: React.FC = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route component={Login} exact path={`${path}/login`} />
        <Route component={Signup} exact path={`${path}/signup`} />
        <Route component={() => <Redirect to={`${path}/login`} />} exact path={path} />
        <Route component={() => <Redirect to="/404" />} path="*" />
      </Switch>
    </>
  );
};

export default AuthRoutes;
