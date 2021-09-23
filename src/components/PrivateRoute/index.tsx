/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Redirect, Route } from "react-router-dom";

import jwtDecode from "jwt-decode";

const PrivateRoute:React.FC<any> = ({ component: Component, ...rest }) => {
  const userToken: string = localStorage.getItem("token") || "";

  let tokenExpired = false;
  let decoded:any = null;

  try {
    decoded = jwtDecode(userToken);
  } catch {
    tokenExpired = true;
  }

  if (decoded && Date.now() >= decoded?.exp * 1000) {
    tokenExpired = true;
  }

  return (
    <>
      <Route
        {...rest}
        render={(props) => (
          ((!tokenExpired && userToken) || false) ? <Component {...props} />
            : <Redirect to={{ pathname: "/auth/login", state: { from: props.location } }} />
        )}
      />
    </>
  );
};

export default PrivateRoute;
