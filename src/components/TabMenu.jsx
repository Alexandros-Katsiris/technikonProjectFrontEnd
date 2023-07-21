import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddContact from "./AddUser";

function TabMenu(){
return (
    <nav class="navbar navbar-expand-sm navbar-light" style={{background: '#FFF', height: "56px"}} >
      <div class="container-fluid" >
   
        <div class="collapse navbar-collapse" id="mynavbar" >
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                href="register"
                style={{ color: "black", fontSize: 18 }}
              >
                Profile
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="properties"
                style={{ color: "black", fontSize: 18 }}
              >
                Properties
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="javascript:void(0)"
                style={{ color: "black", fontSize: 18 }}
              >
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
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