import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner, Alert, Button, ListGroup } from 'react-bootstrap';
import Users from './Users';
import UserCardActions from './UserCardActions';
import AddUser from '../AddUser';
import { API } from '../../api/UserCardApi';
import SearchBar from './SearchBar';


const searchUser = ({ username, name, phone }, searchText) => (
    username.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
    name.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
    phone.toString().search(searchText) !== -1
);


const AxiosApproach = () => {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchText, setSearchText] = useState('');

    const fetchData = () => {
        setError(false);
        setIsLoading(false);

        axios.get(API)
            .then(response => {
                setUsers(response.data);
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

    const toggleModal = () => {
        setShowModal((show) => !show);
    };

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const deleteUserApi = async () => {
    };

    if (error) {
        console.log(error);
        return <Alert variant="warning">{error.message}</Alert>;
    }

    if (isLoading) {
        return <Spinner animation="border" size="lg" />;
    }


    const searchUsers = users.filter((user) => searchUser(user, searchText));

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <div className="text-right">
                <Button onClick={toggleModal}>Add</Button>
            </div>
            <Users>
                {searchUsers.map((user) =>
                    <ListGroup.Item key={user.id}>
                        <UserCardActions
                            user={user}
                            deleteUserr={deleteUserApi}
                        />
                    </ListGroup.Item>
                )}
            </Users>
            <AddUser
                showModal={showModal}
                toggleModal={toggleModal}
                AddUser={AddUser}
            />
        </div>
    )
}

export default AxiosApproach;