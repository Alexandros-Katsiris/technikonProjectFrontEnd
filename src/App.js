import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Properties from "./components/Properties";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import { useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";


const App = () => {
  const { state } = useLocation();

  return (
    <div className="App">
        <Routes>
          <Route index element={<Login />} />
          <Route path="/home" element={<Layout/>}>
            <Route path="properties" element={<Properties/>} />
            <Route path="aboutUs" element={<AboutUs/>}/>
          </Route>
        </Routes>

      {/* <Register/> */}
    </div>
  );
};

export default App;
