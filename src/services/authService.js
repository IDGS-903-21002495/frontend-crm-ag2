/**
 * Servicio de Autenticación
 * Maneja todas las operaciones relacionadas con la autenticación de usuarios:
 * - Login (iniciar sesión)
 * - Logout (cerrar sesión)
 * - Verificación de autenticación
 * - Obtención de datos del usuario actual
 *
 * El token JWT se almacena en localStorage y es utilizado automáticamente por el apiClient en cada petición.
 */
import apiClient from "./apiClient";

export const authService = {
  /**
   * Iniciar sesión
   */
  login: async (credentials) => {
    const response = await apiClient.post("/auth/login", credentials);
    if (response.data.token) {
      localStorage.setItem("authToken", response.data.token);
    }
    return response.data;
  },

  /**
   * Cerrar sesión
   * Elimina el token del localStorage y redirige al login
   */
  logout: () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  },

  /**
   * Verificar si el usuario está autenticado
   * true si existe un token, false en caso contrario
   */
  isAuthenticated: () => {
    return !!localStorage.getItem("authToken");
  },

  /**
   * Obtener el usuario actual logueado
   */
  getCurrentUser: async () => {
    const response = await apiClient.get("/auth/me");
    return response.data;
  },
};
