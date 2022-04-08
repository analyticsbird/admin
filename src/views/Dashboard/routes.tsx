import React from "react";
import {
  Redirect, Route, Switch, useRouteMatch,
} from "react-router-dom";

import Loader from "components/Loader";
import NotFound from "views/NotFound";
import MainLayout from "components/MainLayout";
import Customization from "./container/Customization";
import Integrations from "./container/Integrations";

const DashboardHome = React.lazy(() => import("views/Dashboard/container/AppHome"));
const Feedback = React.lazy(() => import("./container/Feedback"));

const DashboardRouting: React.FC = () => {
  const { path } = useRouteMatch();
  return (
    <MainLayout>
      <React.Suspense fallback={<Loader />}>
        <Switch>
          <Route component={DashboardHome} exact path={`${path}/app`} />
          <Route component={Feedback} exact path={`${path}/feedback`} />
          <Route component={Customization} exact path={`${path}/customization`} />
          <Route component={Integrations} exact path={`${path}/integrations`} />
          <Route component={NotFound} path="/404" />
          <Route component={() => <Redirect to="/404" />} path="*" />
        </Switch>
      </React.Suspense>
    </MainLayout>
  );
};

export default DashboardRouting;
