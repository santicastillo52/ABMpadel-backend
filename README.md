# 🏓 API de Canchas de Pádel - ABM Padel

API REST para la gestión de canchas de pádel desarrollada con Node.js, Express, TypeScript y TypeORM.

## 🌐 URL de Producción

**Base URL:** `https://abmpadel-backend.onrender.com`

## 📋 Características

- ✅ CRUD completo para canchas de pádel
- 📸 Subida de imágenes
- 🗄️ Base de datos PostgreSQL
- 🔧 API REST con Express.js
- 📝 Documentación completa de endpoints
- 🚀 Desplegado en Render

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **TypeScript** - Superset tipado de JavaScript
- **TypeORM** - ORM para base de datos
- **PostgreSQL** - Base de datos relacional
- **Multer** - Middleware para subida de archivos
- **CORS** - Configuración de CORS
- **Morgan** - Logger de HTTP

## 📚 Endpoints de la API

### Canchas (Courts)

#### 1. Obtener todas las canchas
```http
GET /courts
```

**Respuesta:**
```json
[
  {
    "id": 1,
    "name": "Cancha 1",
    "wall_type": "acrylic",
    "court_type": "indoor",
    "image_url": "/uploads/imagen.jpg",
    "available": true,
    "schedules": ["09:00-10:00", "10:00-11:00"],
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAd": "2024-01-01T00:00:00.000Z"
  }
]
```

#### 2. Obtener cancha por ID
```http
GET /court/:id
```

**Parámetros:**
- `id` (number) - ID de la cancha

**Respuesta:**
```json
{
  "id": 1,
  "name": "Cancha 1",
  "wall_type": "acrylic",
  "court_type": "indoor",
  "image_url": "/uploads/imagen.jpg",
  "available": true,
  "schedules": ["09:00-10:00", "10:00-11:00"],
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAd": "2024-01-01T00:00:00.000Z"
}
```

#### 3. Crear nueva cancha
```http
POST /court
Content-Type: multipart/form-data
```

**Body (form-data):**
- `name` (string) - Nombre de la cancha
- `wall_type` (enum) - Tipo de pared: "acrylic" o "cement"
- `court_type` (enum) - Tipo de cancha: "indoor" o "outdoor"
- `schedules` (string) - JSON string con los horarios disponibles
- `image_url` (file) - Imagen de la cancha (opcional)

**Ejemplo:**
```json
{
  "name": "Cancha Premium",
  "wall_type": "acrylic",
  "court_type": "indoor",
  "schedules": "[\"09:00-10:00\", \"10:00-11:00\", \"11:00-12:00\"]"
}
```

#### 4. Actualizar cancha
```http
PUT /court/:id
Content-Type: multipart/form-data
```

**Parámetros:**
- `id` (number) - ID de la cancha a actualizar

**Body (form-data):**
- `name` (string) - Nombre de la cancha (opcional)
- `wall_type` (enum) - Tipo de pared (opcional)
- `court_type` (enum) - Tipo de cancha (opcional)
- `schedules` (string) - JSON string con los horarios (opcional)
- `image_url` (file) - Nueva imagen (opcional)

#### 5. Eliminar cancha
```http
DELETE /court/:id
```

**Parámetros:**
- `id` (number) - ID de la cancha a eliminar

**Respuesta:**
```json
{
  "message": "Cancha eliminada correctamente."
}
```

## 📊 Modelo de Datos

### Court (Cancha)

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | number | ID único (auto-incremental) |
| `name` | string | Nombre de la cancha (máx. 100 caracteres) |
| `wall_type` | enum | Tipo de pared: "acrylic" o "cement" |
| `court_type` | enum | Tipo de cancha: "indoor" o "outdoor" |
| `image_url` | string | URL de la imagen de la cancha |
| `available` | boolean | Disponibilidad de la cancha (default: true) |
| `schedules` | json | Array de horarios disponibles |
| `createdAt` | Date | Fecha de creación |
| `updatedAd` | Date | Fecha de última actualización |

## 🚀 Instalación y Configuración Local

### Prerrequisitos
- Node.js (versión 16 o superior)
- PostgreSQL
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd Backend
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Crear un archivo `.env` en la raíz del proyecto:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
DB_DATABASE=nombre_base_datos
PORT=3000
```

4. **Compilar TypeScript**
```bash
npm run build
```

5. **Ejecutar la aplicación**
```bash
# Modo desarrollo
npm run dev

# Modo producción
npm start
```

## 📁 Estructura del Proyecto

```
Backend/
├── src/
│   ├── app.ts                 # Configuración principal de Express
│   ├── index.ts              # Punto de entrada de la aplicación
│   ├── db.ts                 # Configuración de la base de datos
│   ├── config/
│   │   └── multer.config.ts  # Configuración de Multer para subida de archivos
│   ├── court/
│   │   ├── court.controllers.ts  # Controladores de canchas
│   │   └── court.routes.ts       # Rutas de canchas
│   └── entities/
│       └── court.ts          # Entidad Court (modelo de datos)
├── uploads/                  # Directorio de imágenes subidas
├── dist/                     # Código compilado de TypeScript
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Scripts Disponibles

- `npm run dev` - Ejecuta la aplicación en modo desarrollo con hot-reload
- `npm run build` - Compila el código TypeScript a JavaScript
- `npm start` - Ejecuta la aplicación compilada en modo producción
- `npm run start:tsx` - Ejecuta la aplicación directamente con tsx

## 📝 Códigos de Estado HTTP

- `200` - OK (operación exitosa)
- `201` - Created (recurso creado exitosamente)
- `404` - Not Found (recurso no encontrado)
- `409` - Conflict (recurso ya existe)
- `500` - Internal Server Error (error interno del servidor)

## 🖼️ Gestión de Imágenes

- Las imágenes se almacenan en el directorio `uploads/`
- Se generan nombres únicos para evitar conflictos
- Las imágenes son accesibles públicamente en `/uploads/nombre_archivo`
- Formatos soportados: JPG, JPEG, PNG, etc.


