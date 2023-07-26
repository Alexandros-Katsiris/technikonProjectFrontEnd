import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { countUsersApi } from '../../api/UserApiService';
import { propertyRepairsReports } from '../../api/PropertyApiService';
import { identifier } from '@babel/types';
import ListGroup from "react-bootstrap/ListGroup";
import { retrievePropertyApi } from '../../api/PropertyApiService';
import { retrieveAllUsersApi } from '../../api/UserApiService'
import { Dropdown } from 'react-bootstrap';

function Reports() {

    const [numUsers, setNumUsers] = useState();
    const [repairPropertiesReports, setRepairPropertiesReports] = useState([])
    const [properties, setProperties] = useState([]);
    const [users, setUsers] = useState([]);
    const [tin, setTin] = useState();
    const [userId, setUserId] = useState();

    useEffect(() => {
        getNumUsers();
        getUsers();
    }, []);

    const getUsers = () => {
        retrieveAllUsersApi().then((response) => {
            setUsers(response.data.data);
        });
    };

    const getProperty = () => {
        retrievePropertyApi(tin)
            .then((response) => {
                setProperties(response.data.data);
                //console.log(properties)
            });
    };

    const getNumUsers = () => {
        countUsersApi()
            .then((response) => {
                setNumUsers(response.data.data);
            });
    };

    const getNumPropertyRepairsReports = () => {
        getProperty()
            //const property = properties[0]; 
            properties.map((property => {
            if(property != null)
            propertyRepairsReports(userId, property.id)
                .then((response) => {
                    const newResponse = response.data.data;
                    setRepairPropertiesReports((repairPropertiesReports) => ({ ...repairPropertiesReports, newResponse }));
                    //console.log(response.data.data);
                    console.log(repairPropertiesReports);
                })
            }));
    };

    const onDropDownChange = (tin, id) => {
        console.log(tin)
        setUserId(id);
        setTin(tin);
        getNumPropertyRepairsReports();
    }

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    All T.I. Numbers
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {users.map((user) => {
                        return (
                            <Dropdown.Item onClick={() => onDropDownChange(user.tin, user.id)}>{user.tin}</Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
                    <ListGroup horizontal>
            {repairPropertiesReports?.map((propertyRepairReports) => {
                return (
                    <ListGroup.Item key={propertyRepairReports.repairType}>
                        <Card style={{ width: "18rem" }}>
                            <Card.Body>
                                <Card.Title>REPORTS FOR TYPE: {propertyRepairReports.repairType}</Card.Title>
                                <Card.Text>
                                    <br></br>
                                    Showing total cost and status of the above repair types for user's properties with:<pre></pre>
                                    <ul>
                                        <li>USER ID {localStorage.getItem("id")}</li>
                                        <li>USER TIN {localStorage.getItem("tin")}</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>STATUS: {propertyRepairReports.repairStatus}</ListGroup.Item>
                                <ListGroup.Item>TOTAL COST OF REPAIRS: {propertyRepairReports.costOfRepair}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </ListGroup.Item>
                );
            })}
        </ListGroup>
        </div>
    );
}

export default Reports;