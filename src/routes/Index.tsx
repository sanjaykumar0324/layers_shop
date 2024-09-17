import React from "react";
import { routing } from "./routing";
import { Route, Routes } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <Routes>
      {routing.map((routeItem) => (
        routeItem.nestedRoute ? (
          <Route
            key={routeItem.id}
            path={routeItem.path}
            element={<routeItem.element />}
          >
            {routeItem.nestedRoute.map((nestedRouteItem) => (
              <Route
                key={nestedRouteItem.id}
                path={nestedRouteItem.path}
                element={<nestedRouteItem.element />}
              />
            ))}
          </Route>
        ) : (
          <Route
            key={routeItem.id}
            path={routeItem.path}
            element={<routeItem.element />}
          />
        )
      ))}
    </Routes>
  );
};

export default Index;
