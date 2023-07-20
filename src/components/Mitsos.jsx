import { Outlet } from "react-router-dom";
import "./Mitsos.css"
import Footer from "./Footer";
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
    <Footer />
    
  </div>

);

export default Layout;
