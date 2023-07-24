import { Outlet } from "react-router-dom";
import "./Layout.css";
import Navbar from "./NavBar";
import TabMenu from "./TabMenu";
import { AuthContext } from "../AuthContext";
import Navbar1 from "./navbar1";
import ListOfUsers from "./ListOfUsers";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Properties from "./Properties";
import { Routes, Route } from "react-router-dom";

const Layout = (props) => {
  return (
    <div className="Layout">
      <Navbar1 />
      <TabMenu />
      <main>
        <ListOfUsers/>
      <Outlet/>
      </main>
    </div>
  );
};

export default Layout;
