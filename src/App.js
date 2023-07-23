import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Properties from "./components/Properties";
import Login from "./components/Login";

const App = () => (
  <div className="App">
    <Routes>
      <Route index element={<Login showModal="true" toggleModal="true"/>} />
      <Route path="/menu" element={<Layout />}>
        <Route exact path = "home" elements={<Home/>}/>
        <Route exact path="properties" element={<Properties/>} />
      </Route>
    </Routes>

    {/* <Register/> */}
  </div>
);

export default App;
