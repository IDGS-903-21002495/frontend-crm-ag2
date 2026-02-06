/**
 * Configuración de Tailwind CSS 
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
                    DEFAULT: '#2f2335ff', 
                    dark: '#000',          
                    light: '#fff'          
                }
            }
        }
    }, 
    
    // Plugins de Tailwind (vacío por ahora)
    plugins: [],
}