FROM node:20 AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies
RUN npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy the rest of the frontend files
COPY . .

# Build the application and verify the output
RUN npm run build:prod && ls -la dist/

# Second stage
FROM nginx:stable-alpine

# Remove default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built files to nginx
COPY --from=build /app/dist/browser/* /usr/share/nginx/html/

# Create directory for logs
RUN mkdir -p /var/log/nginx

# Debug commands - MOVED HERE after files are copied
RUN ls -la /usr/share/nginx/html/
RUN cat /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]