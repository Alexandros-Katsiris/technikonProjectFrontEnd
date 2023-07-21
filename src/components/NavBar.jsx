import React, { useState } from "react";
import { Link } from "react-router-dom";
import technikon from "./img/Frame.png";
import logo from "./img/Vector.png";
import { useNavigate } from "react-router-dom";
import AddUser from "./AddUser";
import Login from "./Login";

function Navbar() {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);

  const navigate = useNavigate();

  const toggleModalRegister = () => {
    setShowModalRegister((show) => !show);
  };

  const toggleModalLogin = () => {
    setShowModalLogin((show) => !show);
  };

  const addContact = async () => {};

  const login = async () => {};

  return (
    <nav class="navbar navbar-expand-sm navbar-dark" style={{background: '#0F46CE', height: "72px"}} >
      <div class="container-fluid" >
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          />
        </Link>
        <Link to="/">
          <img src={technikon} alt="frame" />
        </Link>

        {/* <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mynavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button> */}
        <div class="collapse navbar-collapse" id="mynavbar" >
          <div className='d-flex ms-auto'>
            
            {/* <h6>THE MOST COMPLETE DEVELOPERS IN THE WORLD</h6> */}
            
            <form className="d-flex" >
              <input
                className="form-control me-2 align-center"
                type="text"
                placeholder="Search"
                style={{background:"rgba(255, 255, 255, 0.12)", color:"rgba(255, 255, 255, 0.50)", }}
              />
              {/* <button class="btn btn-primary" type="button" align="right" >
                Search
              </button> */}
            </form>
          
          {/* <button class="btn btn-primary" type="button" onClick={toggleModalLogin} style={{marginRight:"20px"}}>
            Login
          </button>
          <button
            class="btn btn-primary"
            type="button"
            onClick={toggleModalRegister}
          >
            Register
          </button> */}
        </div>
      </div>
      <AddUser
        showModal={showModalRegister}
        toggleModal={toggleModalRegister}
        addContact={addContact}
      />
      <Login
        showModal={showModalLogin}
        toggleModal={toggleModalLogin}
        login={login}
      />
      </div>
    </nav>
    
  );
}

export default Navbar;
