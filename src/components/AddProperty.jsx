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
    console.log(event.target.name)
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
    <Modal centered show={showModal} onHide={toggleModal} size="lg">
      <div className='rounded-2' style={{ background: '#7398CF',}}>
      <Modal.Header closeButton style={{borderBottom: 0}}>
        <Modal.Title>Add Property</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {[
            {
              field: "e9Number",
              state: property.e9Number,
              type: "number",
              placeholder: "E9",
              setProperty,
            },
            {
              field: "yearOfConstruction",
              state: property.yearOfConstruction,
              type: "date",
              placeholder: "Construction Date",
              setProperty,
            },
            {
              field: "street",
              state: property.address.street,
              type: "text",
              placeholder: "Street",
              setProperty,
            },
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
                  style={{margin: "2px"}}
                  type={type}
                  placeholder={placeholder}
                  value={state}
                  name={field}
                  onChange={(e) => onInputChange(e)}
                />
              </Col>
            </Form.Group>
          ))}
          <Form.Group key="propertyType" as={Row} controlId={"propertyType"}>
            <Form.Label column sm="2">
              Property Type
            </Form.Label>
            <Col sm="10">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => onInputChange(e)}
              >
                <option>Select property type</option>
                <option name = "propertyType" value="0">Detached House</option>
                <option name = "propertyType" value="1">Maisonette</option>
                <option name = "propertyType" value="2">Apartment Building</option>
                <option name = "propertyType" value="3">Flat</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{borderTop: 0}}>
        <Button variant="secondary" onClick={toggleModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Register
        </Button>
      </Modal.Footer>
      </div>
    </Modal>
  );
};

export default AddProperty;
