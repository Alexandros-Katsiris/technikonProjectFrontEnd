import React, { useState } from "react";
import { Link } from "react-router-dom";
import technikon from "./img/Frame.png";
import logo from "./img/Vector.png";
import Login from "../form/Login";
import { useNavigate } from "react-router-dom";
import AddContact from "./AddUser";



function Navbar() {

  const [showModal,setShowModal] = useState(false);


  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("login");
  };

  const navigateRegister = () => {
    navigate("register");
  };

  const toggleModal = () => {
    setShowModal((show) => !show);
  };

  const addContact = async () =>{
    
  }

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
          <div className='ms-auto'>
            
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
            
          </div>
          <button class="btn btn-primary" type="button" onClick={navigateLogin} style={{marginRight:"20px"}}>
            Login
          </button>
          <button class="btn btn-primary" type="button" onClick={toggleModal}>
            Register
          </button>
        </div>
      </div>
      <AddContact
          showModal={showModal}
          toggleModal={toggleModal}
          addContact={addContact}
        />
    </nav>
    
  );
}

export default Navbar;
