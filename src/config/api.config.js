// Configuración de la API
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  TIMEOUT: parseInt(import.meta.env.VITE_TIMEOUT) || 30000, 
  HEADERS: {
    "Content-Type": "application/json",
  }, 
};

// Endpoints 
export const ENDPOINTS = {
    AUTH: {
        // Endpoints de autenticación 
    }, 
    USERS: {
        // Endpoints relativos a la gestión de usuarios
    }, 
}
