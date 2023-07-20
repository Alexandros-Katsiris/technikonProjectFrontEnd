import React from "react";
import { useState } from 'react';
import {Modal, Form, Button, Row, Col} from 'react-bootstrap';
import { loginUserApi } from '../api/UserApiService';

const Login = ({showModal, toggleModal}) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const onInputChange = (event) => {
    const { name: name, value } = event.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUserApi(credentials)
      .then((response) => {
        console.log(response.data);
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
              {[
                {
                  field: "username",
                  state: credentials.username,
                  type: "text",
                  placeholder: "username",
                  setCredentials,
                },
                {
                  field: "password",
                  state: credentials.password,
                  type: "password",
                  placeholder: "Password",
                  setCredentials,
                },
              ].map(({ field, state, type, placeholder, setCredentials }) => (
                <Form.Group key={field} as={Row} controlId={field}>
                  <Form.Label column sm="2">
                    {placeholder}
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type={type}
                      placeholder={placeholder}
                      value={state}
                      name={field}
                      onChange={(e) => onInputChange(e)}
                      style={{ margin: "2px" }}
                    />
                  </Col>
                </Form.Group>
              ))}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Register
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default Login;