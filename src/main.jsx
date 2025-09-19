import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Sweet from "./pages/Sweet/Sweet";
import Drinks from "./pages/Drinks/Drinks";
import FastFood from "./pages/FastFood/FastFood";
import Buy from "./pages/Buy/Buy";
import Bill from "./pages/Bill/Bill";
import Dashbord from "./pages/DashBord/Dashbord";
import Admin from "./pages/Admin/Admin";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Sweet" element={<Sweet/>} />
        <Route path="/Drinks" element={<Drinks/>} />
        <Route path="/FastFood" element={<FastFood/>} />
        <Route path="/Buy" element={<Buy/>} />
        <Route path="/Bill" element={<Bill/>} />
        <Route path="/Dashbord" element={<Dashbord/>} />
        <Route path="/Admin" element={<Admin/>} />
      </Routes>
    </HashRouter>
  </StrictMode>
);