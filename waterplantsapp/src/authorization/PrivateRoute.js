import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        window.localStorage.getItem("token") !== "undefined" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  export default PrivateRoute;