# Usa una imagen optimizada para Node.js
FROM node:20 AS build

# Define el directorio de trabajo
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias desde la raíz del monorepo
COPY ./frontend/package.json ./frontend/package-lock.json ./

# Instala dependencias sin generar archivos innecesarios
RUN npm install --production

# Copia el resto del código desde la raíz del monorepo
COPY ./frontend ./frontend

# Construye la aplicación
RUN npm run build:prod

# Usa una imagen más ligera para servir la app
FROM nginx:stable-alpine

# Copia los archivos generados al servidor Nginx desde el build
COPY --from=build /app/frontend/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
