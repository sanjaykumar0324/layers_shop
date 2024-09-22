import React from "react";
import { navData } from "../data/navData";
import { NavLink, Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <div className="flex gap-10 px-2 py-2 lg:py-4 lg:px-10 justify-between items-center">
        <Link to="/">
          <img
            src="https://www.layers.shop/cdn/shop/files/logo.jpg?v=1673710599"
            className="w-[80px]"
            alt="logo"
          />
        </Link>
        <div className="flex gap-3 lg:gap-10">
          {navData?.map((navItem) => {
            return (
              <div key={navItem.id}>
                {navItem.isIcon ? (
                  <div>
                    <NavLink to={`${navItem.path}`} className="text-xl">
                      {<navItem.icon />}
                    </NavLink>
                  </div>
                ) : (
                  <div className="hidden lg:block">
                    <NavLink to={navItem.path}>{navItem.label}</NavLink>
                  </div>
                )}
              </div>
            );
          })}
          <span className="lg:hidden ">Menu</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
