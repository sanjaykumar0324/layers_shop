import { ElementType } from "react";
import Home from "../modules/Home";
import Brand from "../components/Brand";
import Collections from "../components/Collections";

interface RoutingItem {
  id: number;
  label: string;
  path: string;
  element: ElementType;
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
    },
    {
      id: 2,
      label: "Brand",
      path: "/pages/select-brand",
      element: Brand,
      isPrivate: false,
      nestedRoute: [
        {
          id: 3,
          label: "Brand Name",
          path: ":brand",
          element: Collections,
          isPrivate: false,
        },
      ],
    },
  ];
  