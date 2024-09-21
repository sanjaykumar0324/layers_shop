import { ComponentType } from "react";
import Home from "../modules/Home";
import Brand from "../components/Brand";
import Collections from "../components/Collections";
import Login from "../modules/Login";
import Cart from "../modules/Cart";
import WithAuth from "../hoc/WithAuth";
import Dashboard from "../modules/Dashboard";
import Search from "../components/Search";

interface RoutingItem {
  id: number;
  label: string;
  path: string;
  element: ComponentType;
  isPrivate: boolean;
  nestedRoute?: RoutingItem[];
}

export const routing: RoutingItem[] = [
  {
    id: 1,
    label: "Home",
    path: "/",
    element: Home,
    isPrivate: false,
    nestedRoute: [
      {
        id: 3,
        label: "Search ",
        path: "/search",
        element: Search,
        isPrivate: false,
      },
    ],
  },
  {
    id: 2,
    label: "Brand",
    path: "/pages/select-brand",
    element: Brand,
    isPrivate: false,
   
  },

  {
    id: 4,
    label: "Login",
    path: "/login",
    element: Login,
    isPrivate: false,
  },
  {
    id: 5,
    label: "Cart",
    path: "/cart",
    element: WithAuth(Cart),
    isPrivate: false,
  },
  {
    id: 6,
    label: "Dashboard",
    path: "/dashboard",
    element: Dashboard,
    isPrivate: true,
  },
  {
    id: 7,
    label: "Brand ",
    path: "/collections/:brand",
    element: Collections,
    isPrivate: false,
  },


];
