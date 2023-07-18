import { apiClient } from "./Api";




export const retrieveAllUsersApi = () => apiClient.get('/users')




export const deleteUserApi = (id) => apiClient.delete(`/users/${id}`)




export const retrieveUserApi = (id) => apiClient.get(`/users/${id}`)




export const updateUserApi = (user) => apiClient.put('/users', user)




export const createUserApi = (user) => apiClient.post('/users', user);
