import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Dex from "../pages/Dex";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { PokemonProvider } from "../context/PokemonContext";

const Router = () => {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  );
};

export default Router;