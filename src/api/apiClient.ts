import axios from 'axios';
import { apiConfig } from './apiConfig'; 

const apiClient = axios.create(apiConfig);

export default apiClient;
