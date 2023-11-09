import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/LoginPage/Login";
import Error from "../Pages/ErrorPage/Error";
import Dashboard from "../Pages/DashboardPage/Dashboard";
import AppRouter from "./AppRouter";
import AuthRouter from "./AuthRouter";
import Transaction from "../Pages/TransactionPage/Transaction";
import Wallet from "../Pages/WalletPage/Wallet";
import Product from "../Pages/ProductPage/Product";
import Project from "../Pages/ProjectPage/Project";
import Setting from "../Pages/SettingPage/Setting";
import UserPage from "../Pages/UserPage/UserPage";

export const ROUTES = {
  LOGIN: "/",
  DASHBOARD: "/dashboard",
  TRANSACTION: "/transaction",
  WALLET: "/wallet",
  PRODUCT: "/product",
  PROJECT: "/project",
  SETTING: "/setting",
  USER: "/user",
};

const navigationRouter = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: (
      <AuthRouter>
        <Login />
      </AuthRouter>
    ),
    errorElement: <Error />,
  },
  {
    path: ROUTES.DASHBOARD,
    element: (
      <AppRouter>
        <Dashboard />
      </AppRouter>
    ),
  },
  {
    path: ROUTES.TRANSACTION,
    element: (
      <AppRouter>
        <Transaction />
      </AppRouter>
    ),
  },
  {
    path: ROUTES.WALLET,
    element: (
      <AppRouter>
        <Wallet />
      </AppRouter>
    ),
  },
  {
    path: ROUTES.PRODUCT,
    element: (
      <AppRouter>
        <Product />
      </AppRouter>
    ),
  },
  {
    path: ROUTES.PROJECT,
    element: (
      <AppRouter>
        <Project />
      </AppRouter>
    ),
  },
  {
    path: ROUTES.SETTING,
    element: (
      <AppRouter>
        <Setting />
      </AppRouter>
    ),
  },
  {
    path: ROUTES.USER,
    element: (
      <AppRouter>
        <UserPage />
      </AppRouter>
    ),
  },
]);

export default navigationRouter;
