import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./components/login/Login";
import AboutUs from "./components/tabMenuComponents/AboutUs";
import ListOfUsers from "./components/listOfUsers/ListOfUsers";
import PropertyCard from "./components/property/PropertyCard";
import Reports from "./components/admin/Reports";
import Home from "./components/home/Home";
import ContactUs from "./components/tabMenuComponents/ContactUs"
import Profile from "./components/tabMenuComponents/Profile";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="properties" element={<PropertyCard />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="listofusers" element={<ListOfUsers />} />
          <Route path="reports" element={<Reports />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contactUs" element={<ContactUs/>}/>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
