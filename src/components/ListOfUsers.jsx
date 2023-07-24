import "./ListOfUsers.css";
import down from "./img/down.png";
import sort from "./img/sort.png";
import filter from "./img/filter.png";
import plus from "./img/+.png";
import downloadimg from "./img/download.png";
import Approach from "./ListUsers/refetch";
import { Container, Row, Col } from 'react-bootstrap';

function ListOfUsers() {



    return (
        <div>
            <div>
                <h5 style={{ color: "#0F46CE" }}><b>List of users</b></h5>
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
                        A-Z</b>
                    <b className="sort">
                        SORT:
                        <img className="sortimg" src={sort} />
                    </b>
                    <b className="plus">ADD PROPERTY
                        <img className="plusimg" src={plus}></img>
                    </b>
                    <b className="download">
                        DOWNLOAD
                        <img className="downloadimg" src={downloadimg} />
                    </b>
                </div>
            </div>
            <div style={{ columnCount: "6", marginTop: "40px", marginLeft: "80px" }}>
                <h6>
                    User Name
                </h6>
                <h6>
                    Phone Number
                </h6>
                <h6>
                    E-mail
                </h6>
                <h6>
                    Date Created
                </h6>
                <h6>
                    Last Edited
                </h6>
                <h6>
                    Activities
                </h6>
            </div>
            <Container style={{ marginTop: "50px", maxWidth: "1000px" }}>
                <Row>
                    <Col xs="12">
                        <Approach />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ListOfUsers;