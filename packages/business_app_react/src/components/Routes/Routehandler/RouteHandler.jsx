import React from "react";
import { PropTypes } from "prop-types";

import {
  PublicRoute,
  AuthenticatedRoute,
  UnauthenticatedRoute,
  withAuthorization,
} from "..";
import APP_CONSTANTS from "../../../data/constants/app";
// import { authenticationService } from "../../../services";
// import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

const RouteHandler = (props) => {
  const { type, routeAccess } = props;

  let Handler;

  switch (type) {
    case APP_CONSTANTS.ROUTE_TYPES.PUBLIC:
      Handler = PublicRoute;
      break;
    case APP_CONSTANTS.ROUTE_TYPES.AUTHENTICATED:
      Handler = AuthenticatedRoute;
      break;
    default:
      Handler = PublicRoute;
  }

  //   if (authenticationService.isAuthenticated && routeAccess) {
  //     Handler = withAuthorization(Handler, props);
  //   }

  return (
    <ErrorBoundary>
      <Handler {...props} />
    </ErrorBoundary>
  );
};

RouteHandler.defaultProps = {
  routeAccess: null,
};

RouteHandler.propTypes = {
  type: PropTypes.string.isRequired,
  routeAccess: PropTypes.shape({}),
  path: PropTypes.string.isRequired,
};

export default RouteHandler;
