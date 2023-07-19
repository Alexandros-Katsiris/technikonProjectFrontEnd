import { apiClient } from "./Api";

export const createPropertyApi = (property) => apiClient.post('/property', property);