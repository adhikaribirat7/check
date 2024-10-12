import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store.js";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import { Provider } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  {/* <App /> */}
  <RouterProvider router={router} />
</Provider>
);
