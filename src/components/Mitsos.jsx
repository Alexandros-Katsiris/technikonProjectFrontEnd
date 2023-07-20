import { Outlet } from "react-router-dom";
import "./Mitsos.css"
import Footer from "./Footer";
import Navbar from "./NavBar";
import TabMenu from "./TabMenu"

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
