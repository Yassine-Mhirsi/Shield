import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HomepageVOne from "pages/HomepageVOne";
import ProductList from "pages/ProductList";
import ProductDetails from "pages/ProductDetails";
import Cart from "pages/Cart";
import Checkout from "pages/Checkout";
import Settings from "pages/Settings";
import SubmitPartner from "pages/SubmitPartner";
import DashboardAdminShop from "pages/DashboardAdminShop";
import AddAgent from "pages/DashboardAdminShop/AddAgent";
import AddTable from "pages/DashboardAdminShop/AddTable";
import TableList from "pages/DashboardAdminShop/TableList";
import MenuList from "pages/DashboardAdminShop/MenuList";


const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    // { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <HomepageVOne />,
    },
    {
      path: "settings",
      element: <Settings />,
    },
    {
      path: "dashboardadminshop",
      element: <DashboardAdminShop />,
    },
    {
      path: "dashboardadminshop/addagent",
      element: <AddAgent />,
    },
    {
      path: "dashboardadminshop/addtable",
      element: <AddTable />,
    },
    {
      path: "dashboardadminshop/menulist",
      element: <MenuList />,
    },
    {
      path: "dashboardadminshop/tablelist",
      element: <TableList />,
    },
    {
      path: "submitPartner",
      element: <SubmitPartner />,
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
