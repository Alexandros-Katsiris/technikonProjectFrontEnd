import { Outlet } from "react-router-dom";
import "./Layout.css"
import Navbar from "./NavBar";
import TabMenu from "./TabMenu"
import { AuthContext } from "../AuthContext";

const Layout = () => (
  
  <div className="Outlet">
    
    <Navbar/>
    <TabMenu />
    <main >
      <Outlet ></Outlet>
    </main>
  </div>

);

export default Layout;
