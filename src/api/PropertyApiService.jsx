import { apiClient } from "./Api";

export const createPropertyApi = (property) => apiClient.post('/property', property);

export const retrievePropertyApi = (tin) => apiClient.get(`property?tin=${tin}`);