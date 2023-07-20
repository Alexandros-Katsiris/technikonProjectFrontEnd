import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Mitsos";
import AddContact from "./components/AddUser";
import Properties from "./components/Properties";

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route exact path="properties" element={<Properties/>} />
      </Route>
    </Routes>

    {/* <Register/> */}
  </div>
);

export default App;
