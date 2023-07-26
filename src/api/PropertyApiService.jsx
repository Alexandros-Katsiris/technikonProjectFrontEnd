import { apiClient } from "./Api";

export const createPropertyApi = (property) => apiClient.post('/property', property);

export const retrievePropertyApi = (tin) => apiClient.get(`property?tin=${tin}`);

export const deletePropertyApi = (propertyId) => apiClient.delete(`/property/${propertyId}`);

export const propertyRepairsReports = (userId, propertyId) => apiClient.get(`propertyRepair?userId=${userId}&propertyId=${propertyId}`);

export const countPropertiesApi = () => apiClient.get(`property/count`);