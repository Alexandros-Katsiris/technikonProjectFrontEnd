import { Outlet } from "react-router-dom";
import "./Layout.css"
import Navbar from "./NavBar";
import TabMenu from "./TabMenu"
import { AuthContext } from "../AuthContext";
import Navbar1 from "./navbar1";

const Layout = () => (
  
  <div className="Layout">
    <Navbar1/>
    <TabMenu />
    <main >
      <Outlet ></Outlet>
    </main>
  
</div>
);

export default Layout;
