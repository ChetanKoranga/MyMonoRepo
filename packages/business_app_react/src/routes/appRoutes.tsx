import React from "react";
// import { RenderRoutes } from "./renderRoutes";
import { Login } from "@/pages/auth/login";
import { createBrowserRouter, RouteObject } from "react-router-dom";
// import { element } from "prop-types";
import Layout from "@/components/Layout/Layout";
import ErrorPage from "@/components/ErrorBoundary/ErrorPage";
import { MapGl } from "@/pages/MapGl/MapGl";

const routesConfig: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MapGl /> },
      {
        path: "app",
        element: <h1>App Home</h1>,
        children: [{ path: "page", element: <h1>App Page</h1> }],
      },
      {
        path: "profile",
        element: <h1>Pofile Home</h1>,
        children: [{ path: "more-info", element: <h1>More Info</h1> }],
      },
      {
        path: "setting",
        element: <h1>Setting Home</h1>,
        children: [{ path: "", element: <h1>More Info</h1> }],
      },
    ],
  },
];

const APP_ROUTES = createBrowserRouter(routesConfig);

// const APP_ROUTESs: RouteConfig[] = [
//   {
//     path: "/",
//     key: "ROOT",
//     component: () => <MapGl />,
//     routes: [
//       {
//         path: "/app/*",
//         key: "APP",
//         component: RenderRoutes,
//         routes: [
//           {
//             path: "/",
//             key: "APP_ROOT",
//             component: () => {
//               return <h1>App Index</h1>;
//             },
//           },
//           {
//             path: "/page/*",
//             key: "APP_PAGE",
//             component: RenderRoutes,
//             routes: [
//               {
//                 path: "/",
//                 key: "APP_PAGE_ROOT",
//                 component: () => <h1>App Page</h1>,
//               },
//               {
//                 path: "/page1",
//                 key: "APP_PAGE_PAGE1",
//                 component: () => {
//                   return <h1>Page1</h1>;
//                 },
//               },
//               {
//                 path: "/page2",
//                 key: "APP_PAGE_PAGE2",
//                 component: () => <h1>Page2</h1>,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         path: "/auth/*",
//         key: "APP",
//         component: RenderRoutes,
//         routes: [
//           {
//             path: "/login",
//             key: "AUTH_LOGIN",
//             component: () => {
//               return <Login />;
//             },
//           },
//           {
//             path: "/register",
//             key: "AUTH_REGISTER",
//             component: () => <h1>Register</h1>,
//           },
//         ],
//       },
//     ],
//   },
// ];

export default APP_ROUTES;
