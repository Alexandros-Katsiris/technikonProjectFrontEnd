import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import ListOfUsers from "./components/ListOfUsers";
import PropertyCard from "./components/PropertyCard";
import Reports from "./components/admin/Reports";


const App = () => {
  return(
    <div className="App">
        <Routes>
          <Route index element={<Login />} />
          <Route path="/home" element={<Layout/>}>
            <Route path="properties" element={<PropertyCard/>} />
            <Route path="aboutUs" element={<AboutUs/>}/>
            <Route path="listofusers" element={<ListOfUsers/>}/>
            
          </Route>
        </Routes>
    </div>
  );

};

export default App;
