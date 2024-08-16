import React from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import APP_ROUTES from "./routes/appRoutes";
// import Layout from "./components/Layout/Layout";

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={APP_ROUTES} />
      <ToastContainer />
    </>
  );
};

export default App;
