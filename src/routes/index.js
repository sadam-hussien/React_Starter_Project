import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedPage from "./ProtectedPage";

import homeRoutes from "modules/home/index.routes";

const routers = [...homeRoutes];

export default function Navigator() {
  return (
    <BrowserRouter>
      <Routes>
        {routers.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <ProtectedPage>
                <route.component />
              </ProtectedPage>
            }
          >
            {route.children &&
              route.children.map((children, idx) => (
                <Route
                  key={idx}
                  path={children.path}
                  element={<children.component />}
                  index={children.index}
                />
              ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}
