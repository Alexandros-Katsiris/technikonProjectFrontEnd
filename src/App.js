import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import ListOfUsers from "./components/ListOfUsers";
import PropertyCard from "./components/PropertyCard";
import Reports from "./components/admin/Reports";
import Home from "./components/Home";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const App = () => {


  return (
 
    <div className="App">
      <Routes>
        <Route index element={<Login/>} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="properties" element={<PropertyCard />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="listofusers" element={<ListOfUsers />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </div>
    
  );

};

export default App;
