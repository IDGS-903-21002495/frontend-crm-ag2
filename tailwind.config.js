/**
 * Configuración de Tailwind CSS 
 * - content: Archivos donde Tailwind buscará clases CSS para incluir en el build
 * - theme: Personalización de colores, espaciado, fuentes, etc.
 * - plugins: Plugins adicionales de Tailwind (formularios, tipografía, etc.)
 */

/** @type{import('tailwindcss').Config} */
export default {
    // Archivos donde se usarán las clases de Tailwind
    content: [
        "./index.html", 
        "./src/**/*.{js,ts,jsx,tsx}",  // Todos los archivos JS/JSX en src/
    ], 
    
    // Personalización del tema
    theme: {
        extend: {
            // Colores personalizados del CRM
            colors: {
                primary: {
                    DEFAULT: '#2f2335ff',  // Color primario principal
                    dark: '#000',          // Variante oscura
                    light: '#fff'          // Variante clara
                }
            }
        }
    }, 
    
    // Plugins de Tailwind (vacío por ahora)
    plugins: [],
}