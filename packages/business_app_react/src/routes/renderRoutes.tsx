import React from "react";
import { Route, Routes } from "react-router-dom";

interface RouteConfig {
  key: string;
  path: string;
  component: React.ComponentType<{ routes?: RouteConfig[] }>;
  routes?: RouteConfig[];
}

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
function RouteWithSubRoutes(route: Readonly<RouteConfig>) {
  return (
    <Route
      key={route.key}
      path={route.path}
      element={<route.component routes={route.routes} />}
    />
  );
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes({ routes }: Readonly<{ routes: RouteConfig[] }>) {
  return (
    <Routes>
      {routes?.map((route) => RouteWithSubRoutes(route))}
      <Route path="*" element={<h1>Not Found!</h1>} />
    </Routes>
  );
}
