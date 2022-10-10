import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken, getUser, loggedIn } from "./Common";

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn() ? (
          <Component {...props} />
          // <Redirect
          //   to={{ pathname: "/dashboard" }}
          // />
        ) : (
          <div>testw</div>
          // <Redirect
          //   to={{ pathname: "/dashboard", state: { from: props.location } }}
          // />
        )
      }
    />
  );
}

export default PrivateRoute;
