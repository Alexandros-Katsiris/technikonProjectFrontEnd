import { Outlet } from "react-router-dom";
import "./Mitsos.css"
import Footer from "./Footer";
import Navbar from "./NavBar";

const Layout = () => (
  <div className="Outlet">
    <Navbar/>
    <main >
      <Outlet ></Outlet>
    </main>
    <Footer />
  </div>
);

export default Layout;
