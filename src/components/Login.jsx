import React from "react";
import { useState } from 'react';
import {Modal, Form, Button, Row, Col} from 'react-bootstrap';
import { loginUserApi } from '../api/UserApiService';
import { AuthContext } from "../AuthContext";

const Login = ({showModal, toggleModal}) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const onInputChange = (event) => {
    const { name: name, value } = event.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
    console.log(event.target)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUserApi(credentials)
      .then((response) => {
        if(response.status===200){
            console.log(response.data);
            return response.json;
        }else{
            alert("Wrong Credentials")
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Modal
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
    </div>
  );
};

export default Login;