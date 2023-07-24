import React, {useState, useEffect} from 'react';
import {Spinner, Alert, Button, ListGroup} from 'react-bootstrap';
import Properties from './Properties';
import PropertyCard from './PropertyCard';
import SearchBar from './SearchBar';
import AddProperty from './AddProperty';
import { retrievePropertyApi } from '../api/PropertyApiService';

const searchProperty = () => {} 
  // username.toLowerCase().search(searchText.toLowerCase()) !== -1 || 
  // name.toLowerCase().search(searchText.toLowerCase()) !== -1 || 
  // phone.toString().search(searchText) !== -1

const AxiosApproach = () => {
  const [properties, setProperties] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setError(false);
    setIsLoading(true);

    retrievePropertyApi(localStorage.getItem("tin"))
      .then(response => {
          setProperties([response.data.data]);
          setIsLoading(false);
          console.log(properties)
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

  const addProperty = async () => {
  };

  const deleteProperty = async () => {
  };

  if (error) {
    return <Alert variant="warning">{error.message}</Alert>;
  }

  if (isLoading) {
    return <Spinner animation="border" size="lg" />;
  }

  const searchproperties = properties.filter((property) => searchProperty(property, searchText));

  return (
      <div>
        <SearchBar onSearch={handleSearch} />
        <div className="text-right">
          <Button onClick={toggleModal}>Add</Button>
        </div>
        <Properties>
          {properties.map((property) => 
            <ListGroup.Item key={property.e9Number}>
              <PropertyCard
                property={property}
              />
            </ListGroup.Item>
          )}
        </Properties>
        <AddProperty
          showModal={showModal}
          toggleModal={toggleModal}
          addProperty={addProperty}
        />
      </div>
  );
}

export default AxiosApproach;