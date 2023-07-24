import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddContact from "./AddUser";
import Properties from "./Properties";
import { AuthContext } from "../AuthContext";

function TabMenu(){

const navigate = useNavigate();

return (
    <nav className="navbar navbar-expand-sm navbar-light" style={{background: '#FFF', height: "56px"}} >
      <div className="container-fluid" >
   
        <div className="collapse navbar-collapse" id="mynavbar" >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="register"
                style={{ color: "black", fontSize: 18 }}
              >
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/home/properties"
                
                style={{ color: "black", fontSize: 18 }}
              >
                Properties
              </a>
            </li>
            <li className="nav-item">
              <a
                class="nav-link"
                href="javascript:void(0)"
                style={{ color: "black", fontSize: 18 }}
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="javascript:void(0)"
                style={{ color: "black", fontSize: 18 }}
              >
                Contact Us
              </a>
              
            </li>
            </ul>
        </div>
      </div>
      {/* <AddContact
          showModal={showModal}
          toggleModal={toggleModal}
          addContact={addContact}
        /> */}
    </nav>
    
  );
}

export default TabMenu;