import "./ListOfUsers.css";
import down from "./img/down.png";
import sort from "./img/sort.png";
import filter from "./img/filter.png";
import plus from "./img/+.png";
import downloadimg from "./img/download.png";
import Approach from "./ListUsers/refetch";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { retrieveAllUsersApi } from "../api/UserApiService";

const ListOfUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    retrieveAllUsersApi().then((response) => {
      setUsers(response.data.data);
      console.log(users);
    });
  };

  useEffect(() => {
    getUsers();
  });

  return (
    <div>
      <div>
        <h5 style={{ color: "#0F46CE" }}>
          <b>List of users</b>
        </h5>
      </div>
      <div>
        <div style={{ columnCount: "1", marginTop: "20px" }}>
          <img src={down} className="down" />
          <b className="all">ALL</b>
          <b className="filter">
            Filter:
            <img className="filterimg" src={filter} />
          </b>
          <b className="az">
            <img className="azimg" src={down} />
            A-Z
          </b>
          <b className="sort">
            SORT:
            <img className="sortimg" src={sort} />
          </b>
          <b className="plus">
            ADD PROPERTY
            <img className="plusimg" src={plus}></img>
          </b>
          <b className="download">
            DOWNLOAD
            <img className="downloadimg" src={downloadimg} />
          </b>
        </div>
      </div>
      <div style={{ columnCount: "6", marginTop: "40px", marginLeft: "80px" }}>
        <h6>Name</h6>
        <h6>Surname</h6>
        <h6>Phone Number</h6>
        <h6>E-mail</h6>
        <h6>Tax ID Number</h6>
        <h6>Actions</h6>
      </div>
      <Container style={{ marginTop: "50px", maxWidth: "1000px" }}>
        <ListGroup >
          {users.map((user) => {
            return (
              <ListGroup.Item key={user.id} style={{marginLeft:'10px'}}>
                <Card style={{ border: '0' }}>
                  <ListGroup variant="" className = "list-group-horizontal-xxl w-100 p-3 " style={{ border: '0' }}  >
                    <ListGroup.Item className="flex-fill">{user.firstName}</ListGroup.Item>
                    <ListGroup.Item className="flex-fill">{user.surname}</ListGroup.Item>
                    <ListGroup.Item className="flex-fill">{user.phoneNumber}</ListGroup.Item>
                    <ListGroup.Item className="flex-fill">{user.email}</ListGroup.Item>
                    <ListGroup.Item className="flex-fill">{user.tin}</ListGroup.Item>
                    <ListGroup.Item className="flex-fill"><span className="badge bg-primary rounded-pill">update</span><span className="badge bg-primary rounded-pill">delete</span></ListGroup.Item>
                  </ListGroup>
                </Card>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Container>
    </div>
  );
};

export default ListOfUsers;
