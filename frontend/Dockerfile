# Build stage
FROM node:20 AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli@latest

# Copy the rest of the application
COPY . .

# Build the Angular application as static files
RUN npm run build:prod

# Production stage
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Copy the built static files
COPY --from=builder /app/dist/browser .

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
