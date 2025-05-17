# Ejemplo de Servidor NodeJS en Docker
## 🚀 ¿Qué hace este proyecto?

- Crea una tabla llamada `tabla` si no existe.
    
- Inserta datos de ejemplo automáticamente (`Juan`, `Ana`, `Pedro`).
    
- Expone dos endpoints:
    
    - `/` → Prueba de que el servidor está corriendo.
        
    - `/consulta` → Devuelve todos los registros de `tabla`.

## 📁 Estructura del proyecto
```
mi-proyecto/
├── docker-compose.yml
└── backend/
    ├── Dockerfile
    ├── index.js
    ├── package.json

```
## 🧱 Tecnologías usadas
- Node.js
    
- Express
    
- MySQL 5.7
    
- Docker / Docker Compose

## ⚙️ Cómo ejecutar el proyecto
1. Clona el repositorio (si aplica)
```
git clone https://github.com/luken-soft/ejemplo-de-docker.git
cd ejemplo-de-docker-main
```
2. Inicia los contenedores
```
docker-compose up --build
```
Docker hará lo siguiente:

- Construirá la imagen del backend desde `/backend/Dockerfile`.
    
- Levantará un contenedor de MySQL con la base de datos `app`.
    
- Iniciará el servidor Node.js en el puerto `3000`.
## 🌐 Endpoints disponibles

| Método | Ruta        | Descripción                                  |
| ------ | ----------- | -------------------------------------------- |
| GET    | `/`         | Prueba de conexión, devuelve un texto simple |
| GET    | `/consulta` | Devuelve los datos de la tabla `tabla`       |
```
[
  {
    "id": 1,
    "nombre": "Juan",
    "edad": 28
  },
  {
    "id": 2,
    "nombre": "Ana",
    "edad": 22
  }
]
```
## 🧼 Para detener los contenedores
```
docker-compose down
```
