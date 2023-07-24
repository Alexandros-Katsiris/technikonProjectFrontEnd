import React from 'react';
import {Row,Col} from 'react-bootstrap';

const UserCard = ({user}) => (
    <Row>
        <Col xs={8}>
            <b><span>{user.username}</span></b>
            <b><span>{user.phoneNumber}</span></b>
            <b><span>{user.email}</span></b>
            <b><span>{user.firstName}</span></b>
            <b><span>{user.surName}</span></b>
        </Col>
    </Row>
)