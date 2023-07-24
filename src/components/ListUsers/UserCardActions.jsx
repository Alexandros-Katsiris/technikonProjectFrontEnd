import React from 'react';
import {Button, Row, Col} from 'react-bootstrap';

const UserCardActions = ({contact, deleteContact}) => (
    <Row>
      <Col xs={8}>
        <b><span>{contact.username}</span></b><br/>
        <span>Name: {contact.name}</span><br/>
        <span>Phone: {contact.phone}</span><br/>
        <span>Email: {contact.email}</span><br/>
        <address>
          {contact.address.street}<br/>
          {contact.address.city}
        </address>
      </Col>
      <Col xs={4} className="text-center">
        <Button variant="danger" onClick={() => deleteContact(contact.id)}>Delete</Button>
      </Col>
    </Row>        
  )
  
  export default UserCardActions;