# Arquitectura del proyecto

## Visión general

El Frontend del CRM está hecho como una aplicación modular escalable donde cada feature (prospectos, actividades, reportes, etc.) estan en su propio módulo independiente.

## Estructura de carpetas

```
frontend-crm-ag2/
├── public/                      # Archivos estáticos públicos
│   └── img/                     # Imágenes públicas
│
├── src/
│   ├── modules/                 # Módulos principales del sistema 
│   │   ├── activities/          # Módulo de Actividades
│   │   │   ├── components/      # Componentes específicos de actividades
│   │   │   ├── services/        # API calls para actividades
│   │   │   ├── hooks/           # Hooks personalizados de actividades
│   │   │   └── pages/           # Páginas del módulo
│   │   │
│   │   ├── prospects/           # Módulo de Prospectos
│   │   │   ├── components/      # Componentes de prospectos
│   │   │   ├── services/        # API calls para prospectos
│   │   │   ├── hooks/           # Hooks de prospectos
│   │   │   └── pages/           # Páginas del módulo
│   │   
│   │
│   ├── components/              # Componentes compartidos 
│   │                            # Ejemplo: Button, Input, Modal, Table
│   │
│   ├── services/                # Servicios globales 
│   │   ├── apiClient.js         # Cliente Axios configurado
│   │   └── authService.js       # Servicio de autenticación
│   │
│   ├── hooks/                   # Hooks compartidos
│   │                            # Ejemplo: useAuth, useFetch, useForm
│   │
│   ├── config/                  # Cofiguración global
│   │   └── config.js            # Variables de configuración
│   │
│   ├── utils/                   # Utilidades 
│   │   └── helpers.js           # Funciones auxiliares
│   │
│   ├── context/                 # Context API 
│   │                            # Estado global con React Context
│   │
│   ├── assets/                  # Recursos de la aplicación
│   │                            # Imágenes, iconos, fuentes
│   │
│   ├── App.jsx                  # Componente raíz
│   ├── main.jsx                 # Punto de entrada
│   └── index.css                # Estilos globales + Tailwind
│
├── documentation/               # DOCUMENTACIÓN
│   └── arquitectura.md          # Este archivo
│
├── vite.config.js               # Configuración de Vite
├── tailwind.config.js           # Configuración de Tailwind
├── package.json                 # Dependencias del proyecto
└── .env.example                 # Ejemplo de variables de entorno
```

## Módulos del sistema

Cada módulo tiene su propia lógica, componentes, servicios y páginas.

### Estructura de un módulo

```
modules/nombre-modulo/
├── components/          # Componentes UI específicos del módulo
│   ├── ModuleList.jsx
│   ├── ModuleForm.jsx
│   └── ModuleCard.jsx
│
├── services/            # Llamadas a la API del módulo
│   └── moduleService.js
│
├── hooks/               # Lógica reutilizable del módulo
│   ├── useModule.js
│   └── useModuleForm.js
│
└── pages/               # Páginas completas del módulo
    ├── ModuleListPage.jsx
    ├── ModuleDetailPage.jsx
    └── ModuleCreatePage.jsx
```

## Servicios compartidos

### 1. apiClient.js - cliente HTTP

Cliente Axios configurado globalmente para todas las peticiones HTTP.


### 2. authService.js - servicio de Autenticación

Maneja todas las operaciones de autenticación.

**Métodos disponibles**:
- `login(credentials)` - Iniciar sesión
- `logout()` - Cerrar sesión
- `isAuthenticated()` - Verificar si hay sesión activa
- `getCurrentUser()` - Obtener datos del usuario actual

## Configuración del proyecto

### Variables de entorno

Crear un archivo `.env` basado en `.env.example`:

```bash
VITE_API_URL=http://localhost:3000/api
```

### Archivos de configuración

#### 1. **vite.config.js**
- Configuración del bundler y dev server
- Plugins: React y Tailwind CSS

#### 2. **tailwind.config.js**
- Personalización de Tailwind CSS
- Colores, fuentes, espaciado personalizado
- Define content para purgar CSS no usado

### Utilidades Disponibles

En `src/utils/helpers.js`:
- `formatDate()` - Formatear fechas
- `isValidEmail()` - Validar emails
- `capitalize()` - Capitalizar texto
- `truncateText()` - Truncar texto largo

