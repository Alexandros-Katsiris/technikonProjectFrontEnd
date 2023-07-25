import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { countUsersApi } from '../../api/UserApiService';
import { propertyRepairsReports } from '../../api/PropertyApiService';
import { identifier } from '@babel/types';
import ListGroup from "react-bootstrap/ListGroup";
import { retrievePropertyApi } from '../../api/PropertyApiService';

function Reports() {

    const [numUsers, setNumUsers] = useState();
    const [repairPropertiesReports, setRepairPropertiesReports] = useState([])
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        getNumUsers();
        getNumPropertyRepairsReports();
    }, []);

    const getNumUsers = () => {
        countUsersApi()
            .then((response) => {
                setNumUsers(response.data.data);
                console.log(numUsers);
            });
    };

    const getProperty = () => {
        retrievePropertyApi(localStorage.getItem("tin"))
            .then((response) => {
                setProperties(response.data.data);
                console.log(properties);
            });
    };

    const getNumPropertyRepairsReports = () => {
        const pid = 1;
        propertyRepairsReports(localStorage.getItem("id"), pid)
            .then((response) => {
                setRepairPropertiesReports(response.data.data);
                console.log(repairPropertiesReports);
            });
    };

    return (
        <div>
            <ListGroup horizontal>
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