import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "./Comm";

// handle the public routes
function Public({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !getToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/dash" }} />
        )
      }
    />
  );
}

export default Public;
