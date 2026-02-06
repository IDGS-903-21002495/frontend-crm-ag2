/**
 * Configuración global de la aplicación
 * Este archivo centraliza todas las configuraciones que se utilizan en diferentes partes de la aplicación.
 */

export const config = {
  // URL de la API backend
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  
  // Nombre de la aplicación
  appName: 'CRM AG2',
  
  // Versión de la aplicación
  appVersion: '1.0.0',
  
  // Configuración de paginación por defecto
  pagination: {
    defaultPageSize: 10,
    pageSizeOptions: [10, 20, 50, 100],
  },
  
  // Formatos de fecha
  dateFormat: 'DD/MM/YYYY',
  dateTimeFormat: 'DD/MM/YYYY HH:mm',
};

export default config;
