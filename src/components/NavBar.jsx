import React from "react";
import { Link } from "react-router-dom";
import technikon from "./img/Frame.png";
import logo from "./img/Vector.png";

const Navbar = () => (
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
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
      <div class="collapse navbar-collapse" id="mynavbar">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a
              class="nav-link"
              href="register"
              style={{ color: "whitesmoke", fontSize: 18 }}
            >
              Profile
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="javascript:void(0)"
              style={{ color: "whitesmoke", fontSize: 18 }}
            >
              Properties
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="javascript:void(0)"
              style={{ color: "whitesmoke", fontSize: 18 }}
            >
              About Us
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="javascript:void(0)"
              style={{ color: "whitesmoke", fontSize: 18 }}
            >
              Contact Us
            </a>
          </li>

          {/* <h6>THE MOST COMPLETE DEVELOPERS IN THE WORLD</h6> */}
          <form class="d-flex" style={{ paddingLeft: "100px" }}>
            <input class="form-control me-2" type="text" placeholder="Search" />
            <button class="btn btn-primary" type="button">
              Search
            </button>
          </form>
        </ul>
        <button class="btn btn-primary" type="button">
          Login
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;