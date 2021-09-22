import React from "react";
import {
  Redirect, Route, BrowserRouter as Router, Switch,
} from "react-router-dom";

import Loader from "components/Loader";
import MainLayout from "components/MainLayout";
import { CssBaseline } from "@mui/material";

const Home = React.lazy(() => import("views/Home"));
const Auth = React.lazy(() => import("views/Auth"));

const Routing: React.FC = () => (
  <>
    <Router>
      <MainLayout>
        <CssBaseline />
        <React.Suspense fallback={<Loader />}>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Auth} path="/auth" />
            <Route component={() => <div>404</div>} path="/404" />
            <Route component={() => <Redirect to="/404" />} path="*" />
          </Switch>
        </React.Suspense>
      </MainLayout>
    </Router>
  </>
);

export default Routing;
