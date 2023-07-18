import "./App.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Login />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
      {/* <Register/> */}
    </div>
  );
}

export default App;
