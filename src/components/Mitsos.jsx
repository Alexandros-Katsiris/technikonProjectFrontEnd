import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./NavBar";

const Layout = () => (
  <>
    <Header />
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;