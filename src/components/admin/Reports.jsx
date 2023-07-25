import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { countUsersApi } from '../../api/UserApiService'; 

function Reports() {

    const [numUsers, setNumUsers] = useState();    

    const getNumUsers = () => {
        countUsersApi()
            .then((response) => {
            setNumUsers(response.data.data);
            console.log(numUsers);
        });
      };

  return (
    <Card>
      <Card.Body>This is some text within a card body.{getNumUsers}</Card.Body>
    </Card>
  );
}

export default Reports;