# Usa una imagen optimizada para Node.js
FROM node:20 AS build

# Define el directorio de trabajo
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias
COPY frontend/package.json frontend/package-lock.json ./

# Instala dependencias sin generar archivos innecesarios
RUN npm install --production

# Copia el resto del código
COPY frontend ./

# Construye la aplicación
RUN npm run build:prod

# Usa una imagen más ligera para servir la app
FROM nginx:stable-alpine

# Copia los archivos generados al servidor Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
