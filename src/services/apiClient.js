/**
 * Cliente HTTP de Axios para consumo de API
 * 
 * Este archivo configura la instancia base de Axios que se utilizará en todo el proyecto para hacer peticiones HTTP al backend
 * - URL base configurable por variable de entorno (VITE_API_URL)
 * - Timeout de 10 segundos por defecto
 * - Interceptor de request: Agrega automáticamente el token JWT a cada petición
 * - Interceptor de response: Maneja errores de autenticación (401) y redirige al login
 */
import axios from 'axios';

// Configuración base de Axios
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Agrega el token de autenticación a cada petición si existe en localStorage
 */
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Interceptor de Response
 * Maneja respuestas exitosas y errores globales
 * *Si el error es 401 (No autorizado), limpia el token y redirige al login
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
