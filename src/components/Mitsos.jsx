import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./NavBar";

const Layout = () => (
  <>
    <Navbar/>
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
