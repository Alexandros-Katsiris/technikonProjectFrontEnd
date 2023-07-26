import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { countUsersApi } from "../../api/UserApiService";
import { propertyRepairsReports } from "../../api/PropertyApiService";
import ListGroup from "react-bootstrap/ListGroup";
import { retrievePropertyApi } from "../../api/PropertyApiService";
import { retrieveAllUsersApi } from "../../api/UserApiService";
import { Dropdown } from "react-bootstrap";

function Reports() {
  const [numUsers, setNumUsers] = useState();
  const [numProperties, setNumProperties] = useState();
  const [repairPropertiesReports, setRepairPropertiesReports] = useState([]);
  const [properties, setProperties] = useState([]);
  const [users, setUsers] = useState([]);
  const [tin, setTin] = useState(localStorage.getItem("tin"));
  const [userId, setUserId] = useState();

  useEffect(() => {
    getNumUsers();
    getUsers();
  },[]);

  const getNumUsers = async() => {
    countUsersApi().then((response) => {
      setNumUsers(response.data.data);
      console.log(numUsers);
    });
  };

  const getUsers = async() => {
    retrieveAllUsersApi().then((response) => {
      setUsers(response.data.data);
    });
  };

  const getProperty =async (tin) => {
     retrievePropertyApi(tin).then((response) => {
      setProperties(response.data.data);
      //console.log(properties)
    });
  };

  const getNumPropertyRepairsReports = async(tin,id) => {
    
    await getProperty(tin);
    
    //const property = properties[0];
    // console.log(properties);
    properties.forEach((property) => {
      if (property != null) {
        propertyRepairsReports(id, property.id).then((response) => {
          setRepairPropertiesReports(response.data.data);
          console.log(response.data.data);
        });
      }
      
    //   console.log(property);
    });
    // console.log(repairPropertiesReports);
  };

  const onDropDownChange = (userTin, id) => {
    
    setUserId(id);
    setTin(userTin);
    
    getNumPropertyRepairsReports();
    console.log(tin);
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu >
          {users.map((user) => {
            return (
              <Dropdown.Item
                onClick={() => getNumPropertyRepairsReports(user.tin, user.id)}
              >
                {user.tin}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <ListGroup horizontal>
        {repairPropertiesReports.map((propertyRepairReports) => {
          return (
            <ListGroup.Item key={propertyRepairReports.repairType}>
              <Card style={{ width: "18rem" }}>
                {/* <Card.Img variant="top" src={house} /> */}
                <Card.Body>
                  <Card.Title>
                    REPORTS FOR TYPE: {propertyRepairReports.repairType}
                  </Card.Title>
                  <Card.Text>
                    <br></br>
                    Showing total cost and status of the above repair types for
                    user's properties with:<pre></pre>
                    <ul>
                      <li>USER ID {localStorage.getItem("id")}</li>
                      <li>USER TIN {localStorage.getItem("tin")}</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    STATUS: {propertyRepairReports.repairStatus}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    TOTAL COST OF REPAIRS: {propertyRepairReports.costOfRepair}
                  </ListGroup.Item>
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
