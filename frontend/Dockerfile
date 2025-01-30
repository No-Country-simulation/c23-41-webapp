# Build stage
FROM node:20 AS builder

WORKDIR /app

# Copy package files from the frontend directory
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the frontend directory contents
COPY frontend/ .

# Install Angular CLI globally
RUN npm install -g @angular/cli@latest

# Build the Angular SSR application
RUN npm run build:prod

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy only the necessary files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Expose the port your server will run on
EXPOSE 4000

# Start the SSR server
CMD ["node", "dist/server/server.mjs"]