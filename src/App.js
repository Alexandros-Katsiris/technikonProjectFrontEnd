import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Mitsos";
import Login from "./form/Login";
import Register from "./form/Register";

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="register" element={<Register />} />
      </Route>
    </Routes>

    {/* <Register/> */}
  </div>
);

export default App;
