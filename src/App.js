import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import { useLocation } from "react-router-dom";
import ListOfUsers from "./components/ListOfUsers";
import PropertyCard from "./components/PropertyCard";


const App = () => {
  return(
    <div className="App">
        <Routes>
          <Route index element={<Login />} />
          <Route path="/home" element={<Layout/>}>
            <Route path="properties" element={<PropertyCard/>} />
            <Route path="aboutUs" element={<AboutUs/>}/>
            <Route path="listofusers" element={<ListOfUsers/>}/>
            <Route path ="reports" element={<Reports/>}/>
          </Route>
        </Routes>
    </div>
  );

};

export default App;
