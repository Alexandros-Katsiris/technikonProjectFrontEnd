import { Outlet } from "react-router-dom";
import "./Layout.css";
import TabMenu from "./TabMenu";
import TabMenuAdmin from "./admin/TabMenuAdmin";
import Navbar1 from "./navbar1";
import NavBarAdmin from "./admin/navbarAdmin"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Layout = (props) => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  console.log(role);

  useEffect(() => {
    if (localStorage.getItem("tin") === null) {
      navigate("/");
    }
  }, []);

  console.log(localStorage.getItem("tin"));
  if (localStorage.getItem("tin") != null) {
    if (role === "user") {
      return (
        <div className="Layout">
          <Navbar1 />
          <TabMenu />
          <main>
          
            <Outlet />
          </main>
        </div>
      );
    }else{
      return (
        <div className="Layout">
          <NavBarAdmin />
          <TabMenuAdmin />
          <main>
            <Outlet />
          </main>
        </div>
      );
    }
  }
};

export default Layout;
