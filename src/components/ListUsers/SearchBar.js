import React from 'react';
import {Form} from 'react-bootstrap';

const SearchBar = ({onSearch}) => (
  <Form.Control
  	className="mb-3"
  	type="search"
  	placeholder="Search for a contact"
  	onChange={onSearch}
  />
);

export default SearchBar;
