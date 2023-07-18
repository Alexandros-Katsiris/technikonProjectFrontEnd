import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Spinner, Alert, Button, ListGroup} from 'react-bootstrap';
import Contacts from '../../common/Contacts';
import UserCardActions from '../../common/UserCardActions';
import SearchBar from '../../common/SearchBar';
import AddContact from './AddContact';
import {API} from '../../api';

const searchContact = ({username, name, phone}, searchText) => ( 
  username.toLowerCase().search(searchText.toLowerCase()) !== -1 || 
  name.toLowerCase().search(searchText.toLowerCase()) !== -1 || 
  phone.toString().search(searchText) !== -1 
);

const AxiosApproach = () => {
  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setError(false);
    setIsLoading(true);

    axios.get(API)
      .then(response => {
          setContacts(response.data);
          setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [])

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const toggleModal = () => {
    setShowModal((show) => !show);
  };

  const addContact = async () => {
  };

  const deleteContact = async () => {
  };

  if (error) {
    return <Alert variant="warning">{error.message}</Alert>;
  }

  if (isLoading) {
    return <Spinner animation="border" size="lg" />;
  }

  const searchContacts = contacts.filter((contact) => searchContact(contact, searchText));

  return (
      <div>
        <SearchBar onSearch={handleSearch} />
        <div className="text-right">
          <Button onClick={toggleModal}>Add</Button>
        </div>
        <Contacts>
          {searchContacts.map((contact) => 
            <ListGroup.Item key={contact.id}>
              <UserCardActions
                contact={contact}
                deleteContact={deleteContact}
              />
            </ListGroup.Item>
          )}
        </Contacts>
        <AddContact
          showModal={showModal}
          toggleModal={toggleModal}
          addContact={addContact}
        />
      </div>
  );
}

export default AxiosApproach;