import { apiClient } from "./Api";




export const retrieveAllUsersApi = () => apiClient.get('/users')




export const deleteUserApi = (id) => apiClient.delete(`/users/${id}`)




export const retrieveUserApi = (id) => apiClient.get(`/owners/${id}`)




export const updateUserApi = (user) => apiClient.put('/owners', user)




export const createUserApi = (user) => apiClient.post('/users', user);
