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
import AddProduct from "pages/DashboardAdminShop/AddProduct";
import Productlist from "pages/DashboardAdminShop/Productlist";
import DashboardAdminInsurance from "pages/DashboardAdminInsurance";
import ContractList from "pages/DashboardAdminInsurance/ContractList";
import ReportList from "pages/DashboardAdminInsurance/ReportList";
import DashboardAdminRepairShop from "pages/DashboardAdminRepairShop";
import Reportlist from "pages/DashboardAdminRepairShop/Reportlist";


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
      path: "dashboardadminshop/addproduct",
      element: <AddProduct />,
    },
    {
      path: "dashboardadminshop/productlist",
      element: <Productlist />,
    },
    {
      path: "dashboardadmininsurance",
      element: <DashboardAdminInsurance />,
    },
    {
      path: "dashboardadmininsurance/contractlist",
      element: <ContractList />,
    },
    {
      path: "dashboardadmininsurance/reportlist",
      element: <ReportList />,
    },
    {
      path: "dashboardadminrepairshop",
      element: <DashboardAdminRepairShop />,
    },
    {
      path: "dashboardadminrepairshop/reportlist",
      element: <Reportlist />,
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
      path: "productdetails/:id",
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
