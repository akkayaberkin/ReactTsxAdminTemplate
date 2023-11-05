import apiClient from './apiClient';

export const getData = async (endpoint: string): Promise<any> => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    // Hata yönetimi
    throw error;
  }
};

export const postData = async (endpoint: string, data: any): Promise<any> => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    // Hata yönetimi
    throw error;
  }
};

export const putData = async (endpoint: string, data: any): Promise<any> => {
  try {
    const response = await apiClient.put(endpoint, data);
    return response.data;
  } catch (error) {
    // Hata yönetimi
    throw error;
  }
};

export const deleteData = async (endpoint: string): Promise<any> => {
  try {
    const response = await apiClient.delete(endpoint);
    return response.data;
  } catch (error) {
    // Hata yönetimi
    throw error;
  }
};

