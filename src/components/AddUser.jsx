import React from 'react';
import { useState } from 'react';
import {Modal, Form, Button, Row, Col} from 'react-bootstrap';
import { createUserApi } from '../api/UserApiService';

const AddContact = ({showModal, toggleModal, addContact}) => {
  // const [firstname, setFirstname] = useState("");
  // const [surname, setSurname] = useState("");
  // const [password, setPassword] = useState("");
  // const [tin, setTin] = useState("");
  // const [username, setUsername] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState({
  //   street: "",
  //   city: "",
  //   number: "",
  //   pc: ""
  // });

  // const onInputChange = (e,setState) => {
  //   const value = e.target.value;
  //   setState(value);
  // };

  
    const [user, setUser] = useState({
      tin: "",
      firstName: "",
      surname: "",
      email: "",
      phoneNumber: "",
      username: "",
      password: "",
      address: {
        street: "",
        number: "",
        city: "",
        pc: "",
      }});
    
  
    const onInputChange = (event) => {
      const { name: name, value } = event.target;
  
      if (
        ["number", "street", "pc", "city"].includes(
          name
        )
      ) {
        setUser((prevState) => ({
          ...prevState,
  
          address: {
            ...prevState.address,
  
            [name]: value,
          },
        }));
      } else {
        setUser((prevState) => ({ ...prevState, [name]: value }));
      }
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      createUserApi(user)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    

  //  const {street, city,number,pc} = address;

  return (
    <Modal show={showModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {
            [
              {field: "tin",state:user.tin, type: "number", placeholder: "Tax ID", setUser},
              {field: "firstName",state:user.firstName, type: "text", placeholder: "FirstName", setUser},
              {field: "surname",state:user.surname, type: "text", placeholder: "Surname",  setUser},
              {field: "username",state:user.username, type: "text", placeholder: "Username",  setUser},
              {field: "password",state:user.password, type: "password", placeholder: "Password",  setUser},
              {field: "phoneNumber",state:user.phone, type: "number", placeholder: "PhoneNumber",  setUser},
              {field: "email",state:user.email, type: "email", placeholder: "Email",  setUser},
              {field: "street",state:user.address.street, type: "text", placeholder: "Street", setUser},
              {field: "city",state:user.address.city, type: "text", placeholder: "City",  setUser},
              {field: "number",state:user.address.number, type: "number", placeholder: "Number",  setUser},
              {field: "pc",state:user.address.pc, type: "number", placeholder: "Postal Code",  setUser},
            ].map(({field,state, type, placeholder, setUser}) => (
              <Form.Group key={field} as={Row} controlId={field}>
                <Form.Label column sm="2">{placeholder}</Form.Label>
                <Col sm="10">
                  <Form.Control type={type} placeholder={placeholder} value={state} name={field}
                   onChange={(e) => onInputChange(e)}/>
                </Col>
              </Form.Group>
            ))
          }
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
    </Modal>
  );
};

export default AddContact;
