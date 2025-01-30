FROM node:20 AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy the entire application
COPY . .

# Build the application
RUN npm run build:prod

# Second stage
FROM nginx:stable-alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built files from the browser directory specifically
COPY --from=build /app/dist/browser/* /usr/share/nginx/html/

# Create directory for logs
RUN mkdir -p /var/log/nginx

# Debug commands
RUN echo "=== Nginx HTML Content ===" && \
    ls -la /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]