import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'

const SideBar = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="sidebar">
            <h1 className="">Company Logo</h1>
            <NavLink className="sidebar_Link" to="/Promocode">
              Promocode
            </NavLink>
            <NavLink className="sidebar_Link" to="/Vendors">
              Vendors
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
