import React from "react";
import {
  Redirect, Route, Switch, useRouteMatch,
} from "react-router-dom";

import Loader from "components/Loader";
import NotFound from "views/NotFound";

const DashboardHome = React.lazy(() => import("views/Dashboard/container/AppHome"));

const DashboardRouting: React.FC = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <React.Suspense fallback={<Loader />}>
        <Switch>
          <Route component={DashboardHome} exact path={`${path}/app`} />
          <Route component={NotFound} path="/404" />
          <Route component={() => <Redirect to="/404" />} path="*" />
        </Switch>
      </React.Suspense>
    </>
  );
};

export default DashboardRouting;
