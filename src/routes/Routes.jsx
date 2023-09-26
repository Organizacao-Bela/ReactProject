import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//Layout
import MainLayout from "../layout/MainLayout";

//Paginas
import PaginaInicial from "../pages/PaginaInicial";
import Apresentacao from "../pages/Apresentacao";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />}>
        {<Route index path="/" element={<PaginaInicial />} />}
        {<Route path="/apresentacao" element={<Apresentacao />} />}
      </Route>
    </>
  )
);
