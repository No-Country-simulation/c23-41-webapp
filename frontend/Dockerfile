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

# Build the application for production with SSR
RUN npm run build:prod

# Second stage
FROM nginx:stable-alpine

# Remove default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built files - adjusted for your dist/ output
COPY --from=build /app/dist/* /usr/share/nginx/html/

# Create directory for logs
RUN mkdir -p /var/log/nginx

# Debug commands to verify content
RUN ls -la /usr/share/nginx/html/
RUN cat /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]