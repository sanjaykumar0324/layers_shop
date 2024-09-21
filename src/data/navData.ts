import { BAG, DICE, SEARCH } from "../utils/icons";

interface NavItem {
  id: number;
  label: string;
  path: string;
  isIcon ?: boolean;
  icon ?: any
}

export const navData: NavItem[] = [
  {
    id: 1,
    label: "Dashboard",
    path: "/dashboard",
    isIcon : false
  },
  {
    id: 2,
    label: "Mobile",
    path: "/pages/select-brand",
    isIcon : false,
  
  },
  {
    id: 3,
    label: "Laptop",
    path: "/laptops",
    isIcon : false

  },
  // {
  //   id: 4,
  //   label: "Collections",
  //   path: "/collections",
  //   isIcon : false

  // },
  {
    id: 5,
    label: "Find Your device",
    path: "/find-your-device",
    isIcon : false

  },
  {
    id: 6,
    label: "How to apply",
    path: "/how-to-apply",
    isIcon : false

  },
  {
    id: 7,
    label: "Login",
    path: "/login",
    isIcon : false

  },
  {
    id: 8,
    label: "Dice",
    path: "/dice",
    isIcon : true,
    icon : DICE

  },
  {
    id: 9,
    label: "Search",
    isIcon : true,
    path :'/search',
    icon :SEARCH

  },
  {
    id: 10,
    label: "Cart",
    path: "/cart",
    isIcon : true,
    icon : BAG

  },


];
