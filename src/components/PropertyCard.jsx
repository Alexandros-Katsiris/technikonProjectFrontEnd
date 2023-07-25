import React, { useEffect } from "react";
import {
  retrievePropertyApi,
  deletePropertyApi,
} from "../api/PropertyApiService";
import "./PropertyCard.css"
import { useState } from "react";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import house from "./img/house.png";
import AddProperty from "./AddProperty";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import AddRepair from "./AddRepair";


const PropertyCard = () => {
  const tin = localStorage.getItem("tin");
  const [properties, setProperties] = useState([]);
  const [propertyId, setPropertyId] = useState(0);

  const [showModalProperty, setShowModalProperty] = useState(false);
  const [showModalRepair, setShowModalRepair] = useState(false);

  const toggleModalProperty = () => {
    setShowModalProperty((show1) => !show1);
  };

  const toggleModalRepair = () => {
    setShowModalRepair((show2) => !show2);
  };

  const addRepair = (id) =>{
    console.log("hi")
    toggleModalRepair();
    setPropertyId(id)
  }

  const getProperty = () => {
    retrievePropertyApi(tin).then((response) => {
      setProperties(response.data.data);
      console.log(properties);
    });
  };

  const addProperty = () => {
    toggleModalProperty();
    getProperty();
  };

  const deleteProperty = (propertyId) => {
    deletePropertyApi(propertyId);
    setProperties(properties.filter((property) => property.id !== propertyId));
  };

  useEffect(() => {
    getProperty();
  }, [showModalProperty]);

  return (
    <div>
      <Button className="btn btn-primary" type="button" onClick={addProperty}>
        Add Property
      </Button>
      <AddProperty showModal={showModalProperty} toggleModal={toggleModalProperty} />
      <AddRepair showModal={showModalRepair} toggleModal={toggleModalRepair} propertyId={propertyId}/>
      <ListGroup horizontal style={{marginLeft:"5%"}}>
        {properties.map((property) => {
          return (
            <ListGroup.Item style={{margin:"8px"}} key={property.e9Number}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={house} />
                <Card.Body>
                  <Card.Title style={{textAlign:"center"}}>{property.propertyType}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    Const. Date: {property.yearOfConstruction}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Address: {property.address.street} {property.address.number}
                    , {property.address.pc}, {property.address.city}
                  </ListGroup.Item>
                  <ListGroup.Item>E9: {property.e9Number}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <ButtonGroup aria-label="Basic example" size='sm'>
                    <Button variant="success"  className="cardButton" onClick={()=>addRepair(property.id)}>Repair</Button>
                    <Button variant="warning" className="cardButton">Edit</Button>
                    <Button variant="danger" className="cardButton" onClick={() => deleteProperty(property.id)}>Delete</Button>
                    
                  </ButtonGroup>
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
