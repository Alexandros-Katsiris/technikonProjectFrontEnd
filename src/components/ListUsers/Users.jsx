import React,{Fragment} from 'react';
import {ListGroup} from 'react-bootstrap';

const Users = ({children}) => (
    <Fragment>
        <ListGroup>
            {children}
        </ListGroup>
    </Fragment>
)

export default Users;