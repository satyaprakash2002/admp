import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Promocode from "./Vendors/Promocode";
import Vendors from "./Vendors/Vendors";
import AddVendors from "./Vendors/AddVendors";

const PgNav = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Vendors">
          <Route index={true} element={<Vendors />}></Route>
          <Route path="Addvendors" element={<AddVendors/>}></Route>
        </Route>
        <Route path="Promocode" element={<Promocode />}></Route>
      </Routes>
    </>
  );
};

export default PgNav;
