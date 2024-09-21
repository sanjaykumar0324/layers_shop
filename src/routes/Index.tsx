import React from "react";
import { Route, Routes } from "react-router-dom";
import { routing } from "./routing";
import WithAuth from "../hoc/WithAuth";

const Index: React.FC = () => {
  return (
    <Routes>
      {routing.map((routeItem) => {
        const Element = routeItem.isPrivate ? WithAuth(routeItem.element) : routeItem.element;

        return routeItem.nestedRoute ? (
          <Route
            key={routeItem.id}
            path={routeItem.path}
            element={<Element />}
          >
            {routeItem.nestedRoute.map((nestedRouteItem) => {
              const NestedElement = nestedRouteItem.isPrivate ? WithAuth(nestedRouteItem.element) : nestedRouteItem.element;

              return (
                <Route
                  key={nestedRouteItem.id}
                  path={nestedRouteItem.path}
                  element={<NestedElement />}
                />
              );
            })}
          </Route>
        ) : (
          <Route
            key={routeItem.id}
            path={routeItem.path}
            element={<Element />}
          />
        );
      })}
    </Routes>
  );
};

export default Index;
