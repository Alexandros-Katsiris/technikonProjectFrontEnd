import React, { useEffect } from "react";
import { useState } from "react";
import {
  Modal,
  Form,
  Button,
  Row,
  Col,
  ModalTitle,
  ModalHeader,
  ModalBody,
} from "react-bootstrap";
import { loginUserApi } from "../api/UserApiService";
import { AuthContext } from "../AuthContext";
import "./Login.css";
import { Link } from "react-router-dom";
import technikon from "./img/Frame.png";
import logo from "./img/Vector.png";
import { useNavigate } from "react-router-dom";
import AddUser from "./AddUser";

const Login = () => {
  const toggleModal = () => {
    setShowModal((show) => !show);
  };

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [showModal, setShowModal] = useState(false);

  const onInputChange = (event) => {
    const { name: name, value } = event.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
    console.log(event.target);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUserApi(credentials)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          navigate("/home")
        } else {
          alert("Wrong Credentials");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="image">
      <div className="gradient">
        <div>
          <div>
            <img
              src={logo}
              alt="logo"
              style={{
                marginLeft: "32px",
                marginTop: "32px",
                marginRight: "9.51px",
              }}
            />
            <img src={technikon} alt="frame" style={{ marginTop: "32px" }} />
          </div>
          {/* <button
              onClick={
                toggleModal
              }
            >
              Login
            </button> */}
          <div className="definetelyNotModal">
            <div className="title">
              <h2>Login</h2>
            </div>
            <div className="body">
              <Form className="form">
                <div
                  style={{
                    width: "502px",
                    height: "106px",
                    marginBottom: "18px",
                  }}
                >
                  <Form.Group key="username">
                    <Form.Label
                      style={{
                        marginBottom: "0px",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                      }}
                    >
                      {" "}
                      Username
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      name="username"
                      value={credentials.username}
                      onChange={(e) => onInputChange(e)}
                      style={{
                        border: "1px",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        paddingLeft: "16px",
                        paddingRight: "16px",
                      }}
                    />
                  </Form.Group>
                </div>
                <div
                  style={{
                    width: "502px",
                    height: "106px",
                    marginBottom: "18px",
                  }}
                >
                  <Form.Group key="password" style={{}}>
                    <Form.Label
                      style={{
                        marginBottom: "0px",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                      }}
                    >
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      value={credentials.password}
                      onChange={(e) => onInputChange(e)}
                      style={{
                        border: "1px",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        paddingLeft: "16px",
                        paddingRight: "16px",
                      }}
                    />
                  </Form.Group>
                </div>
              </Form>
              <div className="forgotPasswordDiv">
                <a className="forgotPassword" href="#">
                  Forgot Password
                </a>
              </div>
              <div className="button">
                <Button
                  className="btn btn-primary"
                  type="button"
                  size="lg"
                  onClick={handleSubmit}
                >
                  Sign In
                </Button>
              </div>
              <div
                style={{
                  marginLeft: "94px",
                  marginRight: "94px",
                }}
              >
                
                <h6 className="hr-lines" >OR</h6>
                
              </div>
              <div className="button">
                <Button
                  class="btn btn-primary"
                  type="button"
                  size="lg"
                  onClick={toggleModal}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddUser showModal={showModal} toggleModal={toggleModal} />
    </div>
    /* <Modal
        className="modal"
        show={showModal}
        centered
        onHide={toggleModal}
        size="lg"
      >
        <div className="rounded-2" style={{ background: "#7398CF", margin: 0 }}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group key= "username">
                  <Form.Label column sm="2"> Username
                  </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      name = "username"
                      value = {credentials.username}
                      onChange={(e) => onInputChange(e)}
                      style={{ margin: "2px" }}
                    />
                </Form.Group>
                <Form.Group key = "password">
                  <Form.Label column sm="2">Password
                  </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      name = "password"
                      value = {credentials.password}
                      onChange={(e) => onInputChange(e)}
                      style={{ margin: "2px" }}
                    />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleModal}>
              Cancel
            </Button>
            <AuthContext.Provider value={handleSubmit}/>
            <Button variant="primary" onClick={handleSubmit}>
              Login
            </Button>
            
          </Modal.Footer>
        </div>
      </Modal>
    </div> */
  );
};

export default Login;
