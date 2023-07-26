import React from "react";


function TabMenuAdmin(){


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
<<<<<<< HEAD
                href="properties"
=======
                href="/properties"
>>>>>>> 09ce0513d01baa4fb6b2c77273c932f4a8d0a3ae
                
                style={{ color: "black", fontSize: 18 }}
              >
                Properties
              </a>
            </li>
            <li className="nav-item">
              <a
                class="nav-link"
<<<<<<< HEAD
                href="listofusers"
=======
                href="/listofusers"
>>>>>>> 09ce0513d01baa4fb6b2c77273c932f4a8d0a3ae
                style={{ color: "black", fontSize: 18 }}
              >
                List of users
              </a>
            </li>
            <li className="nav-item">
              <a
                class="nav-link"
                href="/reports"
                style={{ color: "black", fontSize: 18 }}
              >
                Reports
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

export default TabMenuAdmin;