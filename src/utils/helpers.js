import { PAGE_PERMISSIONS } from "../config/roles.config";
/**
 * Formatear la fecha
 * @param {Date|string} date - Fecha a formatear
 * @param {string} format - Formato defecto DD/MM/YYYY)
 * @returns {string} Fecha formateada
 */
export const formatDate = (date, format = 'DD/MM/YYYY') => {
  if (!date) return '';
  
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  
  return format
    .replace('DD', day)
    .replace('MM', month)
    .replace('YYYY', year)
    .replace('HH', hours)
    .replace('mm', minutes);
};


/**
 * Valida un email
 * @param {string} email - Email a validar
 * @returns {boolean} true si es válido
 */
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Capitaliza la primera letra de un string
 * @param {string} str - String a capitalizar
 * @returns {string} String capitalizado
 */
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Trunca un texto a una longitud máxima
 * @param {string} text - Texto a truncar
 * @param {number} maxLength - Longitud máxima
 * @returns {string} Texto truncado
 */
export const truncateText = (text, maxLength = 50) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Verificar permisos de acceso del usuario 
 * @param {array} - Arreglo con los roles del usuario 
 * @param {string} - Página a acceder 
 */
export const canAccessPage = (userRoles = [], pagePath) => {
    const requiredRoles = PAGE_PERMISSIONS[pagePath]; 
    if(!requiredRoles || requiredRoles.length === 0){
        return true; 
    }
    return userRoles.some(role => requiredRoles.includes(role));
}