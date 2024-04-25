import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HomepageVOne from "pages/HomepageVOne";
import ProductList from "pages/ProductList";
import ProductDetails from "pages/ProductDetails";
import Cart from "pages/Cart";
import Checkout from "pages/Checkout";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    // { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <HomepageVOne />,
    },
    {
      path: "productlist",
      element: <ProductList />,
    },
    {
      path: "productdetails",
      element: <ProductDetails />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "checkout",
      element: <Checkout />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
