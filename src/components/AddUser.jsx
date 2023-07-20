import React from 'react';
import { useState } from 'react';
import {Modal, Form, Button, Row, Col} from 'react-bootstrap';
import { createUserApi } from '../api/UserApiService';
import './AddUser.jsx'

const AddContact = ({showModal, toggleModal}) => {
  
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
    <div >
      <Modal className='modal' show={showModal} centered onHide={toggleModal} size='lg'>
        <div className='rounded-2' >
        <Modal.Header closeButton style={{borderBottom: 0}}>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header >
        <div style={{ background: '#ABAFB1',}}>
        <Modal.Body >         
          <Form >
            {
              [
                {field: "tin",state:user.tin, type: "number", placeholder: "Tax ID", setUser},
                {field: "firstName",state:user.firstName, type: "text", placeholder: "First Name", setUser},
                {field: "surname",state:user.surname, type: "text", placeholder: "Surname",  setUser},
                {field: "username",state:user.username, type: "text", placeholder: "Username",  setUser},
                {field: "password",state:user.password, type: "password", placeholder: "Password",  setUser},
                {field: "phoneNumber",state:user.phone, type: "number", placeholder: "Phone Number",  setUser},
                {field: "email",state:user.email, type: "email", placeholder: "Email",  setUser},
                {field: "street",state:user.address.street, type: "text", placeholder: "Street", setUser},
                {field: "city",state:user.address.city, type: "text", placeholder: "City",  setUser},
                {field: "number",state:user.address.number, type: "number", placeholder: "Street Number",  setUser},
                {field: "pc",state:user.address.pc, type: "number", placeholder: "Postal Code",  setUser},
              ].map(({field,state, type, placeholder, setUser}) => (
                <Form.Group key={field} as={Row} controlId={field}>
                  <Form.Label column sm="2">{placeholder}</Form.Label>
                  <Col sm="10">
                    <Form.Control type={type} placeholder={placeholder} value={state} name={field}
                    onChange={(e) => onInputChange(e)} style={{margin:"2px"}}/>
                  </Col>
                </Form.Group>
              ))
            }
          </Form>
        </Modal.Body>
        
        <Modal.Footer style={{borderTop: 0}}>
          <Button variant="secondary" onClick={toggleModal} style={{background: 'transparent', borderColor:'#0F46CE', color: '#0F46CE'}}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit} style={{background: '#0F46CE', borderColor:'#0F46CE', alignContent:'left'}} >
            Register
          </Button>
        </Modal.Footer>
        </div>
        </div>
      </Modal>
      </div>
  );
};

export default AddContact;
