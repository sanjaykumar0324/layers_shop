import React from "react";
import { navData } from "../data/navData";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-8">
        <div><img src="https://www.layers.shop/cdn/shop/files/logo.jpg?v=1673710599" className="w-[4rem]" alt="logo"/></div>
        <div className="flex gap-10  py-4 items-center">
          {navData?.map((navItem) => {
            return (
              <div key={navItem.id}>
                {navItem.isIcon ? (
                  <NavLink to={navItem.path} className="text-xl" >{<navItem.icon/>}</NavLink>
                ) : (
                  <NavLink to={navItem.path}>{navItem.label}</NavLink>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
