# CRM AG2 - Frontend

Aplicación frontend de gestión de relaciones con clientes (CRM) construida con React, Vite y Tailwind CSS.

## Estructura del Proyecto

```
frontend-crm-ag2/
├── src/
│   ├── assets/              # Recursos estáticos
│   ├── components/          # Componentes reutilizables
│   ├── config/              # Archivos de configuración
│   │   ├── api.config.js    # Configuración de API
│   │   ├── config.js        # Configuración global
│   │   └── roles.config.js  # Definición de roles y permisos
│   ├── context/             # Context API de React
│   │   ├── AuthContext.jsx  # Provider de autenticación
│   │   └── AuthContextValue.js
│   ├── hooks/               # Custom hooks
│   │   └── useAuth.js       # Hook para autenticación
│   ├── modules/             # Módulos principales
│   │   ├── activities/      # Gestión de actividades
│   │   └── prospects/       # Gestión de prospectos
│   ├── services/            # Servicios de API
│   │   ├── apiClient.js     # Cliente HTTP configurado
│   │   └── authService.js   # Servicio de autenticación
│   ├── utils/               # Utilidades y helpers
│   │   └── helpers.js       # Funciones auxiliares
│   ├── App.jsx              # Componente principal
│   └── main.jsx             # Punto de entrada
├── documentation/           # Documentación del proyecto
└── public/                  # Archivos públicos
```

## Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn
- Backend del CRM (API REST) en ejecución

## Instalación

1. Clona el repositorio e instala las dependencias:

```bash
cd frontend-crm-ag2
npm install
```

2. Crea un archivo `.env` en la raíz del proyecto con la configuración del backend:

```env
VITE_API_URL=http://localhost:3000/api
VITE_TIMEOUT=30000
```

## Ejecución

### Modo Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/`

### Modo Producción

Construye la aplicación para producción:

```bash
npm run build
```

Previsualiza el build de producción:

```bash
npm run preview
```

## Tecnologías Utilizadas

- React 19
- Vite 7
- React Router 7
- Tailwind CSS 4
- Axios

## 
> **Desarrollador por**: Laura Maria Del Cielo Ortiz Ponce
> **Versión**: 1.0.0 (Enero 2026)

