FROM node:20 AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including devDependencies) needed for building
RUN npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy the rest of the frontend files
COPY . .

# Build the application
RUN npm run build:prod

# Second stage
FROM nginx:stable-alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built files to nginx
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]