import React from "react";
import { useState } from "react";
import { Modal, Form, Button, Row, Col, Dropdown } from "react-bootstrap";
import { createPropertyApi } from "../api/PropertyApiService";

const AddProperty = ({ showModal, toggleModal }) => {
  const [property, setProperty] = useState({
    e9Number: "",
    yearOfConstruction: "",
    propertyType: "",
    webUser: {
      id: "1",
    },
    address: {
      street: "",
      number: "",
      city: "",
      pc: "",
    },
  });

  const onInputChange = (event) => {
    const { name: name, value } = event.target;

    if (["number", "street", "pc", "city"].includes(name)) {
      setProperty((prevState) => ({
        ...prevState,

        address: {
          ...prevState.address,

          [name]: value,
        },
      }));
    } else {
      setProperty((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createPropertyApi(property)
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
          {[
            {
              field: "e9Number",
              state: property.e9Number,
              type: "number",
              placeholder: "e9Number",
              setProperty,
            },
            {
              field: "yearOfConstruction",
              state: property.yearOfConstruction,
              type: "text",
              placeholder: "yearOfConstruction",
              setProperty,
            },
            {
              field: "propertyType",
              state: property.propertyType,
              type: Dropdown,
              placeholder: "PropertyType",
              setProperty,
            },
            {
              field: "street",
              state: property.address.street,
              type: "text",
              placeholder: "Street",
              setProperty,
            },
            //   {field: "userId",state:property.webUser.id, type: "number", placeholder: "City",  setProperty},
            {
              field: "city",
              state: property.address.city,
              type: "text",
              placeholder: "City",
              setProperty,
            },
            {
              field: "number",
              state: property.address.number,
              type: "number",
              placeholder: "Number",
              setProperty,
            },
            {
              field: "pc",
              state: property.address.pc,
              type: "number",
              placeholder: "Postal Code",
              setProperty,
            },
          ].map(({ field, state, type, placeholder, setProperty }) => (
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
    </Modal>
  );
};

export default AddProperty;
