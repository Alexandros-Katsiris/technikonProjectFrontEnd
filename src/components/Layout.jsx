import { Outlet } from "react-router-dom";
import { Header, NavBar, Footer } from "./";

const Layout = () => (
  <>
    <Header />
    <Sidebar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;