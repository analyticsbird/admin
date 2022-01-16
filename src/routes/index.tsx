import React from "react";
import {
  Redirect, Route, BrowserRouter as Router, Switch,
} from "react-router-dom";

import Loader from "components/Loader";
import { CssBaseline } from "@mui/material";
import NotFound from "views/NotFound";
import PrivateRoute from "components/PrivateRoute";

const Home = React.lazy(() => import("views/Home"));
const Auth = React.lazy(() => import("views/Auth"));
const DashboardRouting = React.lazy(() => import("views/Dashboard"));

const Routing: React.FC = () => (
  <>
    <Router>
      <CssBaseline />
      <React.Suspense fallback={<Loader />}>
        <Switch>
          <PrivateRoute component={Home} exact path="/" />
          <PrivateRoute component={DashboardRouting} path="/dashboard/:appId" />
          <Route component={Auth} path="/auth" />
          <Route component={NotFound} path="/404" />
          <Route component={() => <Redirect to="/404" />} path="*" />
        </Switch>
      </React.Suspense>
    </Router>
  </>
);

export default Routing;
