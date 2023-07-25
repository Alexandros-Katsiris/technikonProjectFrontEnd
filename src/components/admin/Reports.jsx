import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { countUsersApi } from '../../api/UserApiService';
import { propertyRepairsReports } from '../../api/PropertyApiService';
import ListGroup from "react-bootstrap/ListGroup";
import { countPropertiesApi } from '../../api/PropertyApiService';

function Reports() {

    const [numUsers, setNumUsers] = useState();
    const [numProperties, setNumProperties] = useState();
    const [repairPropertiesReports, setRepairPropertiesReports] = useState([])

    useEffect(() => {
        getNumUsers();
        getNumProperties();
    }, []);

    const getNumUsers = () => {
        countUsersApi()
            .then((response) => {
                setNumUsers(response.data.data);
            });
    };

    const getNumProperties = () => {
        countPropertiesApi()
            .then((response) => {
                setNumProperties(response.data.data);
            });
    };

    return (
        <div>
            <ListGroup horizontal>
                <ListGroup.Item>
                    <Card style={{ width: "18rem" }}>
                        <Card.Body>
                            {/* <Card.Title>REPORTS FOR REGISTERED USERS/PROPERTIES</Card.Title> */}
                            <Card.Text>
                                <br></br>
                                REPORTS FOR REGISTERED USERS AND PROPERTIES.<pre></pre>
                                <ul>
                                    <li>Registered users: {numUsers}</li>
                                    <li>Registered Properties: {numProperties}</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        {/* <ListGroup className="list-group-flush">
                            <ListGroup.Item>STATUS: {}</ListGroup.Item>
                            <ListGroup.Item>TOTAL COST OF REPAIRS: {}</ListGroup.Item>
                        </ListGroup> */}
                    </Card>
                </ListGroup.Item>
                {repairPropertiesReports.map((propertyRepairReports) => {
                    return (
                        <ListGroup.Item key={propertyRepairReports.repairType}>
                            <Card style={{ width: "18rem" }}>
                                {/* <Card.Img variant="top" src={house} /> */}
                                <Card.Body>
                                    <Card.Title>REPORTS FOR TYPE: {propertyRepairReports.repairType}</Card.Title>
                                    <Card.Text>
                                        <br></br>
                                        Showing total cost and status of the above repair types for user's properties with:<pre></pre>
                                        <ul>
                                            <li>STATUS: </li>
                                            <li>TOTAL COST: </li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                                {/* <ListGroup className="list-group-flush"> */}
                                    {/* <ListGroup.Item>STATUS: {propertyRepairReports.repairStatus}</ListGroup.Item>
                                    <ListGroup.Item>TOTAL COST OF REPAIRS: {propertyRepairReports.costOfRepair}</ListGroup.Item> */}
                                {/* </ListGroup> */}
                            </Card>
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
        </div>
    );
}

export default Reports;