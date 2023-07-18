import React, {useState} from 'react';
import {Modal, Form, Button, Row, Col} from 'react-bootstrap';

const AddContact = ({showModal, toggleModal, addContact}) => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState({
    street: "",
    city: ""
  });

  const onInputChange = () => {
  };

  const {street, city} = address;

  return (
    <Modal show={showModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {
            [
              {field: "username", state: username, type: "text", placeholder: "Username", setState: setUsername},
              {field: "name", state: name, type: "text", placeholder: "Name", setState: setName},
              {field: "phone", state: phone, type: "text", placeholder: "Phone", setState: setPhone},
              {field: "email", state: email, type: "email", placeholder: "Email", setState: setEmail},
              {field: "street", state: street, type: "text", placeholder: "Street", setState: setAddress},
              {field: "city", state: city, type: "text", placeholder: "City", setState: setAddress},
            ].map(({field, state, type, placeholder, setState}) => (
              <Form.Group key={field} as={Row} controlId={field}>
                <Form.Label column sm="2">{placeholder}</Form.Label>
                <Col sm="10">
                  <Form.Control type={type} placeholder={placeholder} value={state} name={field} onChange={(e) => onInputChange(e, setState)}/>
                </Col>
              </Form.Group>
            ))
          }
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleModal}>
          Close
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddContact;
