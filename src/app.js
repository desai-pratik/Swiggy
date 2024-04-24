import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ReactDOM from "react-dom";
import "../index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContectUs from "./components/ContectUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmar from "./components/Shimmar";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"; 
import Cart from "./components/Cart"
 
const Grocery = lazy(() => import("./components/Grocery"))

const Page = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contect",
        element: <ContectUs />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmar />}><Grocery /></Suspense>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
