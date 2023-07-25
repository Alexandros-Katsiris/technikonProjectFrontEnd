import React, { useEffect } from "react";
import {
  retrievePropertyApi,
  deletePropertyApi,
} from "../api/PropertyApiService";
import AddUser from "./AddUser";
import { useState } from "react";
import { Card, ListGroupItem } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import house from "./img/house.png";
import Button from "react-bootstrap/Button";
import AddProperty from "./AddProperty";

const PropertyCard = () => {

  const tin = localStorage.getItem("tin");
  const [properties, setProperties] = useState([]);

  const [showModal,setShowModal] = useState(false);
    
    const toggleModal = () => {
        setShowModal((show) => !show);
    };

  const getProperty = () => {
    retrievePropertyApi(tin).then((response) => {
      setProperties(response.data.data);
      console.log(properties);
    });
  };

  const addProperty = () => {
      toggleModal();
      getProperty();
  }

  const deleteProperty = (propertyId) => {
    deletePropertyApi(propertyId);
    setProperties(properties.filter((property) => property.id != propertyId));
  };

  useEffect(() => {
    getProperty();
  }, [showModal]);

  return (
    <div>
      <Button className="btn btn-primary" type="button" onClick={addProperty}>Add Property</Button>
      <AddProperty
            showModal={showModal}
            toggleModal={toggleModal}
            />
    <ListGroup horizontal>
      {properties.map((property) => {
        return (
          <ListGroup.Item key={property.e9Number}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={house} />
              <Card.Body>
                <Card.Title>Type: {property.propertyType}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body style={{ display: "" }}>
                <div style={{display:"inline-block"}}>
                  <Button
                    style={{width: "100px", height: "50px" }}
                    variant="success"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteProperty(property.id)}
                    style={{  width: "100px", height: "50px" }}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
    </div>
  );
};
export default PropertyCard;